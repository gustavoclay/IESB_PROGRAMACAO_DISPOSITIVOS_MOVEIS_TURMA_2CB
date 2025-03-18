// Imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

// Função que representa o componente
export default function App() {
  // Lógica do componente
  const nome = "Gustavo"

  function alerta() {
    alert("Cliclou no botão!!!!!")
  }

  // retorno dessa função com o template do que vai ser
  // renderizado na tela (JSX)
  return (
    // ScrollView permite que o conteudo vá até depois da barra de rolagem
    // não pode ser usado sozinho, tem que ter uma View dentro
    // // ele só envolve o conteudo
    <ScrollView>
      <View style={styles.container}>
        {/* comentário dentro do JSX */}
        {/*  */}
        {/* <StatusBar style="auto" /> */}
        {/* css inline */}
        <Text style={{ fontSize: 50, fontStyle: 'italic' }} >Algum texto qualuer</Text>

        {/* css com StyleSheet */}
        <Text style={styles.textGrande}>HELLO</Text>

        <Text>{nome}</Text>
        <Button title='Enviar' onPress={alerta}></Button>
        {/* Imagem de fora com link */}
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/47/e7/fd/47e7fd39f8e5a44877234f1d3c7bf1dc.jpg'
          }}
          style={{
            height: 300,
            width: 300
          }}
        />
        {/* Imagem de dentro do projeto */}
        <Image
          source={require('./imagens/image.png')}
          style={{
            height: 300,
            width: 300
          }}
        />
        <Image
          source={require('./imagens/image.png')}
          style={{
            height: 300,
            width: 300
          }}
        />
        <Image
          source={require('./imagens/image.png')}
          style={{
            height: 300,
            width: 300
          }}
        />
        <Image
          source={require('./imagens/image.png')}
          style={{
            height: 300,
            width: 300
          }}
        />
      </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGrande: {
    fontSize: 40,
    fontWeight: 900
  }
});
