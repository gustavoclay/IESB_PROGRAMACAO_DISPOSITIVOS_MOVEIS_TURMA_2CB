import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Jogador from '../components/Jodador';

export default function BrasilScreen() {

  const brasil = {
    nome: "Brasil",
    imagem: "https://i.pinimg.com/736x/95/8f/7c/958f7ccbb6fcfcb57140d9cd9c3bba3b.jpg",
    treinador: "Dorival Junior",
    titulos_copa_mundo: 5,
    administrador: "CBF - Confederação Brasileira de Futebol",
    estadio: "Maracanã",
    jogadores: [
      {
        id: "1",
        nome: "Alisson",
        numero: "01",
        imagem: "https://i.pinimg.com/736x/d1/a4/ba/d1a4ba149753aef117e806029f891ed2.jpg"
      },
      {
        id: "2",
        nome: "Danilo",
        numero: "02",
        imagem: "https://i.pinimg.com/736x/26/97/5f/26975fb9e00b4f5ab0672e0379e0a07f.jpg"
      },
      {
        id: "3",
        nome: "Thiago Silva",
        numero: "03",
        imagem: "https://i.pinimg.com/736x/5c/f1/af/5cf1af138bb144ba679cb8ee96cb2c7a.jpg"
      },
      {
        id: "4",
        nome: "Marquinhos",
        numero: "04",
        imagem: "https://i.pinimg.com/736x/0d/63/3e/0d633e78667a2b2daa1a3fa7837ebc1a.jpg"
      },
      {
        id: "5",
        nome: "Alex Sandro",
        numero: "05",
        imagem: "https://i.pinimg.com/736x/c1/f3/53/c1f35369a8c352e71031ced93cbd3984.jpg"
      },
      {
        id: "6",
        nome: "Casemiro",
        numero: "06",
        imagem: "https://i.pinimg.com/736x/62/56/ee/6256eed0b69864a97ec5f9fc1ca97157.jpg"
      },
      {
        id: "7",
        nome: "Paquetá",
        numero: "07",
        imagem: "https://i.pinimg.com/736x/60/8f/db/608fdb49d8c95fd4399a41ed470f36dd.jpg"
      },
      {
        id: "8",
        nome: "Fred",
        numero: "08",
        imagem: "https://i.pinimg.com/736x/f3/ef/97/f3ef978107ed4278f619c0f7819e822e.jpg"
      },
      {
        id: "9",
        nome: "Neymar",
        numero: "09",
        imagem: "https://i.pinimg.com/736x/56/32/26/56322603f3f95b66ee993abc193b7c94.jpg"
      },
      {
        id: "10",
        nome: "Vinicius Júnior",
        numero: "10",
        imagem: "https://i.pinimg.com/736x/8b/90/a3/8b90a360fb9b26d8ce3f96b4834d0c99.jpg"
      },
      {
        id: "11",
        nome: "Richarlison",
        numero: "11",
        imagem: "https://i.pinimg.com/736x/fb/66/7d/fb667db98949471ef735215666a7c103.jpg"
      }
    ]
  };



  return (
    <View>
      <Card style={{ margin: 10 }}>
        <Card.Cover source={{ uri: brasil.imagem }} />
        <Card.Content>
          <Text>Nome: {brasil.nome}</Text>
          <Text>Treinador: {brasil.treinador}</Text>
          <Text>Titulos Copa do Mundo: {brasil.titulos_copa_mundo}</Text>
          <Text>Administrador: {brasil.administrador}</Text>
          <Text>Estádio: {brasil.estadio}</Text>
        </Card.Content>
        <Card.Actions>
          <FlatList
            horizontal
            data={brasil.jogadores}
            renderItem={
              ({ item }) => (
                <Jogador
                  nome={item.nome}
                  numero={item.numero}
                  imagem={item.imagem}
                />
              )
            }
          />
        </Card.Actions>
      </Card>

      <FlatList
        data={brasil.jogadores}
        renderItem={
          ({ item }) => (
            <Jogador
              nome={item.nome}
              numero={item.numero}
              imagem={item.imagem}
            />
          )
        }
      />
    </View>
  )
}
