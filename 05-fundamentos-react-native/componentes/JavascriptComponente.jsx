import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {

  const nome = "Gustavo"
  const idade = 16

  function checkMaiorIdade() {
    if(idade >= 18){
      return "Maior de Idade"
    } else {
      return "Menor de Idade"
    }
  }

  function alerta() {
    alert("Clicou no botão!!!!")
  }


  return (
    <View>
      <Text>JavaScript Componente</Text>

      <Text>NOME: {nome}</Text>
      <Text>IDADE: {idade}</Text>
      <Text>IDADE+40: {idade + 40}</Text>
      <Text>É maior de idade? {checkMaiorIdade()}</Text>
      <Text>Check: {idade >= 18 ? "18+" : "18-"}</Text>
      <Button title='Clicar' onPress={alerta}></Button>

    </View>
  )
}

const styles = StyleSheet.create({})