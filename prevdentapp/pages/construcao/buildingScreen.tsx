// src/screens/UnderConstructionScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import BackArrow from '../../Components/common/backArrowComponent';

function UnderConstructionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackArrow />
      </View>
      <View style={styles.content}>
        <Image
          source={require('../../assets/em-construcao.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Em Construção</Text>
        <Text style={styles.message}>
          Estamos trabalhando duro para trazer esta nova funcionalidade para você.
          Fique ligado para atualizações em breve!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    height: 60,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 400,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default UnderConstructionScreen;