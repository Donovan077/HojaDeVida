import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Registro</Text>
      <TextInput placeholder="Nombre" style={{ marginVertical: 10, borderWidth: 1, padding: 5 }} />
      <TextInput placeholder="Email" style={{ marginVertical: 10, borderWidth: 1, padding: 5 }} />
      <TextInput placeholder="Contraseña" secureTextEntry style={{ marginVertical: 10, borderWidth: 1, padding: 5 }} />
      <Button title="Registrarse" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default RegisterScreen;
