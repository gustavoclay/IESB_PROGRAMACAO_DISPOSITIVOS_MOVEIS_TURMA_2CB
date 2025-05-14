import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import {Card, Text, Button} from 'react-native-paper'

export default function NumeroAleatorio() {

  const [numero, setNumero] = useState('???')

  function gerarNumero(){
    const numeroAleatorio = Math.floor(Math.random() * 101)
    setNumero(numeroAleatorio.toString())
  }

  function resetarNumero() {
    setNumero('???')
  }

  return (
    <View>
      <Card>
        <Card.Content>
          <Card.Title title="Componente NumeroAleatorio" />
          <Text variant='displayMedium'>Número Aleatório: {numero}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={resetarNumero}>
            Resetar
          </Button>
          <Button onPress={gerarNumero}>
            Gerar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  )
}