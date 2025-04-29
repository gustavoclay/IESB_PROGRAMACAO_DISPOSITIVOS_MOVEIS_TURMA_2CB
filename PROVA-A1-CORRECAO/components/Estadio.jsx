import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

export default function Estadio(props) {

  const { id, nome, cidade, capacidade, imagem } = props

  return (
    <Card style={styles.container}>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Content>
        <Text>Nome: {nome}</Text>
        <Text>Cidade: {cidade}</Text>
        <Text>Capacidade: {capacidade}</Text>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  }
})