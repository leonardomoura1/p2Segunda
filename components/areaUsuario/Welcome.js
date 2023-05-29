import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../banco/firebaseConfig';
import styles from '../style/css';

export default function Welcome({ route, navigation }) {
    const { email } = route.params;
  
    const handleLogout = () => {
      signOut(auth)
        .then(() => {
          navigation.navigate('Auth'); // Redireciona de volta para a tela de autenticação após o logout
        })
        .catch((error) => {
          // Trata o erro, se necessário
          console.log(error);
        });
    };
  
    return (
      <View style={{justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.h1}>Bem-vindo, {email}!</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.buttonDeslogar}>
          <Text style={styles.buttonDeslogarText}>Sair</Text>
        </TouchableOpacity>
        <Text style={styles.h2}>Vídeos Fodas Abaixo</Text>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ftR3pHZKyOE?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
        <iframe style={{marginTop: 15}}
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/u7QeOznIvOA" 
          title="YouTube video player" 
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </View>
    );
  }
  
