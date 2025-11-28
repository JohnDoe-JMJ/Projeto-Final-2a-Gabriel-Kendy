import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function TemaLivre() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image
        source={require('../../assets/JogosEletronicosImg.png')}
        style={styles.hero}
        resizeMode="cover"
      />

      <Text style={styles.title}>Jogos Eletrônicos</Text>
      <Text style={styles.paragraph}>
        Os jogos eletrônicos são uma forma de entretenimento interativa que
        envolve software, hardware e design de experiência. Eles vão desde
        jogos casuais para celulares até experiências imersivas em consoles
        e PCs. Esta página apresenta informações sobre seus benefícios e
        pontos de atenção.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vantagens</Text>
        <Text style={styles.listItem}>
          • Desenvolvimento cognitivo — raciocínio, estratégia e tomada de decisão.
        </Text>
        <Text style={styles.listItem}>• Coordenação motora e reflexos aprimorados.</Text>
        <Text style={styles.listItem}>
          • Socialização e trabalho em equipe em jogos multiplayer.
        </Text>
        <Text style={styles.listItem}>
          • Potencial educacional — jogos sérios e simuladores.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Desvantagens</Text>
        <Text style={styles.listItem}>
          • Risco de dependência quando jogados sem limites.
        </Text>
        <Text style={styles.listItem}>
          • Sedentarismo e impactos na saúde física.
        </Text>
        <Text style={styles.listItem}>
          • Possível contato com conteúdo inapropriado sem supervisão.
        </Text>
        <Text style={styles.listItem}>
          • Custos com hardware, jogos e microtransações.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Feito com ♥ — Jogue com responsabilidade</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0f1724",
  },
  content: {
    padding: 20,
    paddingBottom: 60,
  },
  hero: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    color: "#e6eef8",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  paragraph: {
    color: "#cbd5e1",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
  section: {
    backgroundColor: "#0b1220",
    padding: 14,
    borderRadius: 12,
    marginBottom: 14,
  },
  sectionTitle: {
    color: "#93c5fd",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  sectionImage: {
    width: "100%",
    height: 140,
    marginBottom: 10,
    borderRadius: 8,
  },
  listItem: {
    color: "#cbd5e1",
    fontSize: 15,
    marginBottom: 6,
  },
  footer: {
    alignItems: "center",
    marginTop: 6,
  },
  footerText: {
    color: "#94a3b8",
    fontSize: 13,
  },
});
