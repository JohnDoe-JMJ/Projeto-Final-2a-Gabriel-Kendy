import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function AboutMe() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image
        source={require('../../assets/JogosTabuleiroImg.png')}
        style={styles.hero}
        resizeMode="cover"
      />

      <Text style={styles.title}>Jogos de Tabuleiro</Text>
      <Text style={styles.paragraph}>
        Jogos de tabuleiro são uma forma clássica de entretenimento que envolve interação presencial,
        regras bem-definidas e peças físicas. Eles variam de jogos familiares simples a experiências
        estratégicas complexas e têm ganhado renovado interesse com o crescimento de comunidades e cafés de jogos.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vantagens</Text>
        <Text style={styles.listItem}>• Socialização — encontros presenciais e fortalecimento de laços.</Text>
        <Text style={styles.listItem}>• Desenvolvimento cognitivo — lógica, memória e pensamento estratégico.</Text>
        <Text style={styles.listItem}>• Acessibilidade criativa — prototipagem e design de jogos caseiros.</Text>
        <Text style={styles.listItem}>• Experiência tátil e imersiva com componentes físicos.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Desvantagens</Text>
        <Text style={styles.listItem}>• Custo — jogos modernos e expansões podem ser caros.</Text>
        <Text style={styles.listItem}>• Espaço físico necessário para guardar e jogar.</Text>
        <Text style={styles.listItem}>• Requer jogadores — depende de encontrar pessoas disponíveis.</Text>
        <Text style={styles.listItem}>• Manutenção — peças perdidas, desgaste e organização.</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Feito com ♥ — Explore, jogue e compartilhe</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#0b1220' },
  content: { padding: 20, paddingBottom: 60 },
  hero: { width: '100%', height: 220, borderRadius: 12, marginBottom: 16 },
  title: { color: '#f1f5f9', fontSize: 26, fontWeight: '700', marginBottom: 8 },
  paragraph: { color: '#cbd5e1', fontSize: 16, lineHeight: 22, marginBottom: 16 },
  section: { backgroundColor: '#081025', padding: 14, borderRadius: 12, marginBottom: 14 },
  sectionTitle: { color: '#7dd3fc', fontSize: 20, fontWeight: '700', marginBottom: 8 },
  sectionImage: { width: '100%', height: 140, marginBottom: 10, borderRadius: 8 },
  listItem: { color: '#cbd5e1', fontSize: 15, marginBottom: 6 },
  footer: { alignItems: 'center', marginTop: 6 },
  footerText: { color: '#94a3b8', fontSize: 13 },
});
