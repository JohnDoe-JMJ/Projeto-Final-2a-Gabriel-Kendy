import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem Vindo ao Aplicativo</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#081426', // fundo profissional
  },
  container: {
    flex: 1,
    justifyContent: 'center',   // centraliza verticalmente
    alignItems: 'center',        // centraliza horizontalmente
    padding: 20,
  },
  title: {
    color: '#e6f0fb',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
});
