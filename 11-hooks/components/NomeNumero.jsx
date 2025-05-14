import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Text, Button } from 'react-native-paper'

export default function NomeNumero() {

  const [nome, setNome] = useState('?????')

  let numero = '?????'

  function mostrarNomeNumero(){
      setNome("Lucas")
      numero = "122"
      console.log(nome)
      console.log(numero)
  }

  function alterarNome(){
    setNome("Pedro")
  }

  return (
    <View>
      <Card>
        <Card.Content>
          <Card.Title title="Componente NomeNumero" />
          <Text variant='displayMedium'>Nome: {nome}</Text>
          <Text variant='displayMedium'>Número: {numero}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={mostrarNomeNumero}>Mostrar</Button>
          <Button onPress={alterarNome}>Alterar Nome</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}