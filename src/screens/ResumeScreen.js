import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ResumeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://e7.pngegg.com/pngimages/103/590/png-clipart-computer-icons-user-profile-avatar-heroes-monochrome.png' }} 
          style={styles.avatar}
        />
        <Text style={styles.name}>Donovan Rodríguez</Text>
        <Text style={styles.title}>Desarrollador de Software</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perfil</Text>
        <Text style={styles.sectionContent}>
          Desarrollador de software con 5 años de experiencia en aplicaciones web y móviles. Apasionado por crear soluciones innovadoras usando las últimas tecnologías.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>React Native</Text>
          <Text style={styles.skill}>Node.js</Text>
          <Text style={styles.skill}>MongoDB</Text>
          <Text style={styles.skill}>API REST</Text>
          <Text style={styles.skill}>Gestión de Proyectos</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiencia</Text>
        <Text style={styles.jobTitle}>Snack Expo - Desarrollador Principal</Text>
        <Text style={styles.jobDetails}>
          Desarrollé una aplicación móvil para gestionar eventos, brindando acceso a los asistentes a información en tiempo real, expositores, y sesiones.
        </Text>
        <Text style={styles.jobTitle}>Plataforma E-commerce</Text>
        <Text style={styles.jobDetails}>
          Creé una solución de comercio electrónico escalable, integrando pasarelas de pago y optimizando la experiencia de usuario.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educación</Text>
        <Text style={styles.jobTitle}>Ingeniería de Sistemas - Universidad Nacional</Text>
        <Text style={styles.jobDetails}>
          Graduado en 2019 con especialización en desarrollo de software y sistemas distribuidos.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#003366',
  },
  title: {
    fontSize: 18,
    color: '#0066cc',
    marginVertical: 5,
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: '#333333',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  skill: {
    backgroundColor: '#0066cc',
    color: '#fff',
    padding: 8,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginTop: 10,
  },
  jobDetails: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
});

export default ResumeScreen;
