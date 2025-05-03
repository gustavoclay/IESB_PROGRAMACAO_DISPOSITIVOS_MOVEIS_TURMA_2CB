import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

export default function HomeScreen(props) {

  const { navigation, route } = props

  // Serve para navegar entre as telas
  console.log("NAVIGATION => ", navigation)

  // Serve para pegar os parametros e dados da rota
  console.log("ROUTE => ", route)

  return (
    <View>
      <Text>HomeScreen</Text>

      <Button
        mode='contained'
        onPress={() => navigation.navigate('ProfileScreen')}
      >
        Ir para Tela Profile
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({})