import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Platform, ImageBackground } from 'react-native';
import foto from "../../assets/foto.jpg";
import { SafeAreaView } from 'react-native-safe-area-context';
import background from "../../assets/background.jpg"

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={background} style={styles.background} resizeMode="cover">
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
        <Text style={{ fontWeight: "bold" }}>Endereço: </Text>  Rua Exempo, 
        123
      </Text>
      <Text style={styles.subtitle}>
        <Text style={{ fontWeight: "bold" }}>Cidade: </Text> Presidente Venceslau
      </Text>
      <Text style={styles.subtitle}>
        <Text style={{ fontWeight: "bold" }}>Estado: </Text> São Paulo
      </Text>
      </View>
    </View>
    </View>
    </ImageBackground>
    <StatusBar style="auto" />
    </SafeAreaView>
    );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#c3edf3ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  main: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 20,
     // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    // fontSize: 36,
    fontSize: Platform.OS === "web" ? 48 : 36,
    marginBottom: 20,
    textTransform: "uppercase",
    fontWeight: Platform.OS === "web" ? "bold" : null,
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
  },
  background: {
    height: "100%",
    width: "100%",
    flex: 1,
  }
});
