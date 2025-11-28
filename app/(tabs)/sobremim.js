import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SobreMim() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <Text style={styles.title}>Sobre mim</Text>

        <Image
          source={require('../../assets/minhafoto.png')}
          style={styles.profileImage}
          resizeMode="cover"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Nome: Gabriel</Text>
          <Text style={styles.infoText}>Série: 2° Ano</Text>
          <Text style={styles.infoText}>Curso: Informatica para Internet</Text>
          <Text style={styles.infoText}>Professor: Grazzianni</Text>
          <Text style={styles.infoText}>Matéria: Desenvolvimento para Dispositivos Móveis I</Text>
          <Text style={styles.infoText}>Tema: Jogos</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#081426',
  },
  container: {
    flex: 1,
    justifyContent: 'center',   // centraliza verticalmente
    alignItems: 'center',        // centraliza horizontalmente
    padding: 20,
  },
  title: {
    color: '#e6f0fb',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#e6f0fb',
  },
  infoContainer: {
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    color: '#cdd7e3',
    fontSize: 16,
    textAlign: 'center',
  },
});
