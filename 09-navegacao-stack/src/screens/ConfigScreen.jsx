import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

export default function ConfigScreen(props) {

  const { navigation, route } = props

  return (
    <View>
      <Text>ConfigScreen</Text>

      <Button
        mode='contained-tonal'
        onPress={() => navigation.goBack()}
      >
        Voltar
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({})