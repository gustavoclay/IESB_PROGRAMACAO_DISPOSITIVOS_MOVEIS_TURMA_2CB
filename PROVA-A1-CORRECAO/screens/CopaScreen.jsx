import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function CopaScreen() {

  const copa = {
    nome: "Copa do Mundo FIFA 2022",
    imagem: 'https://i.pinimg.com/236x/00/63/15/00631561f4895a630508c2b0d0bdb4d1.jpg',
    local: "Qatar",
    organizacao: "FIFA",
    mascote: "La'eeb",
    edicao: 22,
    ano: 2022,
    campeao: "Argentina",
    viceCampeao: "França",
  };


  return (
    <View>
      <Card style={{ margin: 20 }}>
        <Card.Cover source={{ uri: copa.imagem }} style={{ height: 400 }} />
        <Card.Content>
          <Card.Title title={copa.nome} />
          <Text>Ano: {copa.ano}</Text>
          <Text>Local: {copa.local}</Text>
          <Text>Organização: {copa.organizacao}</Text>
          <Text>Mascote: {copa.mascote}</Text>
          <Text>Edição: {copa.edicao}</Text>
          <Text>Campeão: {copa.campeao}</Text>
          <Text>Vices: {copa.viceCampeao}</Text>
        </Card.Content>
      </Card>
    </View>
  )
}
