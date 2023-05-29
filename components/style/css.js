import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%',
    },
    input: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
    button: {
      backgroundColor: '#000',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutline: {
      backgroundColor: '#005',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    buttonOutlineText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 16,
    },
    texto: {
      color: '#000',
      fontWeight: '700',
      fontSize: 16,
      marginTop: 10,
      marginBottom: 5,
    },
    buttonDeslogar: {
        backgroundColor: '#600',
        width: '10%',
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
    },
    buttonDeslogarText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 12,
    },
    h1l: { 
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
    },
    h1: { 
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
        marginBottom: 15,
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
        marginBottom: 15,
    },
    teste:{
      textDecorationLine: 'underline',
      marginTop: 10,
    },
  });

export default styles;