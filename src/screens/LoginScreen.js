import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#cccccc"
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        placeholderTextColor="#cccccc"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Iniciar" onPress={() => navigation.navigate('Home')} color="#0066cc" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default LoginScreen;
