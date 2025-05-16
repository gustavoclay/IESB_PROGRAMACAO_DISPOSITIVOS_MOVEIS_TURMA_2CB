import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

export default function Pessoa() {

  const [pessoa, setPessoa] = useState({})

  function revelar(){
    const novaPessoa = {
      nome: "Lucas",
      idade: "29",
      imagem: "https://i.pinimg.com/736x/65/92/d2/6592d22f05d29398784337cd02a37e26.jpg"
    }
    setPessoa(novaPessoa)
  }

  function revelar2() {
    const novaPessoa = {
      nome: "Pedro",
      idade: "20",
      imagem: "https://i.pinimg.com/736x/2b/8a/cf/2b8acffe3ad03586ed0fc7047a633e44.jpg"
    }
    setPessoa(novaPessoa)
  }

  return (
    <View>
      <Card>
        <Card.Content>
          <Text variant='displaySmall'>Componente Pessoa</Text>
          <Text variant='displaySmall'>Nome: {pessoa.nome}</Text>
          <Text variant='displaySmall'>Idade: {pessoa.idade}</Text>
          <Card.Cover source={{ uri: pessoa.imagem }} />
        </Card.Content>
        <Card.Actions>
          <Button onPress={revelar}>Revelar</Button>
          <Button onPress={revelar2}>Revelar2</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}
