import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Card } from 'react-native-paper'

export default function ItemScreen({ navigation, route }) {

  console.log("CARRO RECEBIDO => ", route.params.item)

  const carro = route.params.item

  return (
    <View>
      <Card>
        <Card.Content>
          <Text>Nome: {carro.nome}</Text>
          <Text>Fabricante: {carro.fabricante}</Text>
          <Text>Cor: {carro.cor}</Text>
          <Text>Ano: {carro.ano}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode='contained-tonal'
            icon='arrow-left'
            onPress={() => navigation.goBack()}
          >
            Voltar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})