import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Text, Button } from 'react-native-paper'

export default function GeradorNumeroAleatorio() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0)
  const [lista, setLista] = useState([])

  function gerar() {
    const numero = Math.floor(Math.random() * 101)
    setNumeroAleatorio(numero)
    setLista([...lista, numero])
  }

  function resetar(){
    setNumeroAleatorio(0)
    setLista([])
  }

  return (
    <View>
      <Card>
        <Card.Content>
          <Text variant='displaySmall'>Gerador de Números:</Text>
          <Text variant='displaySmall'>{numeroAleatorio}</Text>
        </Card.Content>
        <Card.Actions>
            <Button onPress={resetar}>Resetar</Button>
            <Button onPress={gerar}>Gerar</Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Content>
          <Text variant='displaySmall'>Histórico</Text>
          {lista.map(numero => <Text variant='labelLarge'>{numero}</Text>)}
        </Card.Content>
      </Card>
    </View>
  )
}
