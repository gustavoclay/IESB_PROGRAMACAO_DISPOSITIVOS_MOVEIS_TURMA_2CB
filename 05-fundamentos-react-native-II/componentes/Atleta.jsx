import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Atleta(props) {

  const { nome, idade, imagem } = props

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Atleta</Text>

      <Text style={styles.texto}>NOME: {nome}</Text>
      <Text style={styles.texto}>IDADE: {idade}</Text>

      <Image
        source={{
          uri: imagem
        }}
        style={{
          height: 300,
          width: 300
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    borderWidth: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  texto: {
    fontSize: 20,
    fontWeight: 600
  }
})