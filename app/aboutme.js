import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import foto from "../assets/foto.jfif";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <View>
      <Image source={foto} />
      </View>
      <View>
      <Text style={styles.subtitle}>Detalhes Estudantis</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  ) }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2e9f0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
  },
});
