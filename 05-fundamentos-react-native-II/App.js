import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PrimeiroComponente />
      <JavascriptComponente />

      <Perfil
        nome="Gustavo"
        idade={22}
        email="gustavo@gmail.com"
        telefone="61900000001"
      />

      <Perfil 
        nome="Teste"
        idade={20}
        email="teste@teste.com"
        telefone="61900000002"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
