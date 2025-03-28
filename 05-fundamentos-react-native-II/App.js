import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';
import Pessoa from './componentes/Pessoa';
import Atleta from './componentes/Atleta';

export default function App() {


  const listaJogadores = [
    {
      nome: "Neymar",
      idade: 33,
      imagem: 'https://i.pinimg.com/236x/65/92/d2/6592d22f05d29398784337cd02a37e26.jpg'
    },
    {
      nome: "Cristiano Ronaldo",
      idade: 40,
      imagem: 'https://i.pinimg.com/474x/e2/07/cc/e207cc58c891798d5ff308b38ebc59cc.jpg'
    },
    {
      nome: "Lebron James",
      idade: 40,
      imagem: 'https://i.pinimg.com/236x/6a/ae/f7/6aaef74808fdfbe4b25c41699fba6d81.jpg'
    },
    {
      nome: "Falcão",
      idade: 40,
      imagem: 'https://i.pinimg.com/236x/2a/35/4f/2a354f4de93337261a885fee54e55118.jpg'
    },
  ]



  return (
    <ScrollView>

      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.header}>Lista de Atletas</Text>

        {
          listaJogadores.map(
            jogador => {
              return (
                <Atleta 
                  nome={jogador.nome}
                  idade={jogador.idade}
                  imagem={jogador.imagem}
                />
              )
            }
          )
        }

      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: 'red',
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    paddingTop: 30
  }
});
