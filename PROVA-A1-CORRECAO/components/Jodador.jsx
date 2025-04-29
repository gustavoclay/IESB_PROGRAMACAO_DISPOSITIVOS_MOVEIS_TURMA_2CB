import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

export default function Jodador(props) {

  const { nome, numero, imagem } = props


  return (
    <Card.Title
      title={nome}
      subtitle={numero}
      left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} />}
    />
  )
}
