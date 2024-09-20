import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Login"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Registrarse"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Hoja de Vida"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() => navigation.navigate('Resume')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  button: {
    backgroundColor: '#0066cc', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: 250, 
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default HomeScreen;
