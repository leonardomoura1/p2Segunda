import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../banco/firebaseConfig';
import styles from '../style/css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Estado para controlar se está na tela de login

  const navigation = useNavigation();

  const handleAuth = () => {
    setErrorMessage(''); // Limpa a mensagem de erro

    if (isLogin) {
      // Realiza o login
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigation.navigate('Welcome', { email });
        })
        .catch((error) => {
          // Trata o erro e exibe a mensagem apropriada
          if (email === ''){
            setErrorMessage('Preencha o campo Email.');
          } else if (password === ''){
            setErrorMessage('Preencha o campo Senha.');
          }else if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
            setErrorMessage('Email ou senha incorreto. Verifique e tente novamente.');
          }else {
            setErrorMessage('Erro ao fazer login. Tente novamente mais tarde.');
          }
          console.log(error);
        });
    } else {
      // Realiza o cadastro
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setIsLogin(true);
          navigation.navigate('Welcome', { email });
        })
        .catch((error) => {
          // Trata o erro e exibe a mensagem apropriada
          if (email === '' || password === ''){
            setErrorMessage('Preencha todos os campos.');
          }else if (error.code === 'auth/email-already-in-use') {
            setErrorMessage('Email já cadastrado. Tente fazer login em vez de cadastrar.');
          } else if (error.code === 'auth/invalid-email') {
            setErrorMessage('Email inválido. Verifique e tente novamente.');
          } else {
            setErrorMessage('Erro ao cadastrar. Tente novamente mais tarde.');
          }
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.container} >
      <View style={styles.inputContainer}>
        <Text style={styles.h1l}>{isLogin ? 'Login' : 'Cadastro'}</Text>
        <Text style={styles.texto}>Email</Text>
        <TextInput
          placeholder="teste@hotmail.com"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
        />
        <Text style={styles.texto}>Senha</Text>
        <TextInput
          placeholder="***********"
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.input}
          secureTextEntry
        />

      </View>
      <View style={styles.buttonContainer}>
        {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        
        <TouchableOpacity onPress={handleAuth} style={isLogin ? styles.button : styles.buttonOutline}>
          <Text style={isLogin ? styles.buttonText : styles.buttonOutlineText}>{isLogin ? 'Entrar' : 'Cadastrar'}</Text>
        </TouchableOpacity>
        <Text style={styles.teste} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Não possui uma conta? Cadastre-se!' : 'Já possui uma conta? Faça login!'}
        </Text>
      </View>
    </View>
  );
}