import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Platform } from 'react-native';
import foto from "../assets/foto.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <View style={styles.main}>
      <View>
      <Image source={foto} style={styles.foto} />
      </View>
      <View>
      <Text style={styles.subtitle}>
        <Text style={{ fontWeight: "bold" }}>Nome: </Text> Gabriel Kendy
      </Text>
      <Text style={styles.subtitle}>
        <Text style={{ fontWeight: "bold" }}>RM: </Text> 08642
      </Text>
      <Text style={styles.subtitle}>
        <Text style={{ fontWeight: "bold" }}>Endereço: </Text>  Rua Exempo, 123 - Presidente Venceslau, São Paulo
      </Text>
      </View>
      <StatusBar style="auto" />
    </View>
    </View>
  ) }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3edf3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 20,
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 15,
     // marginBottom: 20,
  }
});
