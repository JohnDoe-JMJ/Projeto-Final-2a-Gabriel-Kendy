import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.headerView}>
      <Text style={styles.headerText}>Aulas de DDM</Text>
    </View>
    <ScrollView style={{flex: 1}}>
        <View style={styles.cardView}>
            <Image source={{ uri: "https://picsum.photos/200" }} style={styles.imageCard} />
            <View style>
                <Text style={styles.cardTitle}>Título</Text>
                <Text style={styles.cardDescription}>Descrição</Text>
            </View>
            </View>
            <View style={styles.cardView}>
            <Image source={{ uri: "https://picsum.photos/200" }} style={styles.imageCard} />
            <View style>
                <Text style={styles.cardTitle}>Título</Text>
                <Text style={styles.cardDescription}>Descrição</Text>
            </View>
            </View>
            <View style={styles.cardView}>
            <Image source={{ uri: "https://picsum.photos/200" }} style={styles.imageCard} />
            <View style>
                <Text style={styles.cardTitle}>Título</Text>
                <Text style={styles.cardDescription}>Descrição</Text>
            </View>
            </View>
            <View style={styles.cardView}>
            <Image source={{ uri: "https://picsum.photos/200" }} style={styles.imageCard} />
            <View style>
                <Text style={styles.cardTitle}>Título</Text>
                <Text style={styles.cardDescription}>Descrição</Text>
            </View>
            </View>
            <View style={styles.cardView}>
            <Image source={{ uri: "https://picsum.photos/200" }} style={styles.imageCard} />
            <View style>
                <Text style={styles.cardTitle}>Título</Text>
                <Text style={styles.cardDescription}>Descrição</Text>
            </View>
            </View>
    </ScrollView>
    <StatusBar style="auto" />
    </SafeAreaView>
  ) }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  headerView: {
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    // justifyContent: "center",
    textAlign: "center",
    fontFamily: "FasterOne_400Regular"
  },
  cardView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#0000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    margin: 15,
  },
  imageCard: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  textCardContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
  }
});
