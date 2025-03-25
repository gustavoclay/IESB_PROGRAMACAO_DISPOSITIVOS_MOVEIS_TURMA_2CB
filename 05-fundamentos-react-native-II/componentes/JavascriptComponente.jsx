import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function JavascriptComponente() {

  const nome = "Gustavo Clay"
  const idade = 15

  function checarMaiorIdade() {
    console.log("Chamou a função checarMaiorIdade")
    if (idade >= 18) {
      return "Maior de Idade"
    } else {
      return "Menor de Idade"
    }
  }

  function alerta() {
    console.log("Chamou a função alerta")
    alert("Clicou no botão!!!!")
  }


  return (
    <View style={styles.container}>
      <Text>JavascriptComponente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade+40: {idade + 40}</Text>
      <Text>18+: {checarMaiorIdade()}</Text>
      <Button title='Clicar' onPress={alerta} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow"
  }
})