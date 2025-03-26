import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Pessoa(props) {

  const { dados } = props
  console.log(props)
  
  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Jogador</Text>
      <Text>Nome: {dados.nome}</Text>
      <Text>Idade: {dados.idade}</Text>

      <Image
        source={{ uri: dados.imagem }}
        style={{
          height: 200,
          width: 200
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 15,
    fontWeight: 600
  }
})