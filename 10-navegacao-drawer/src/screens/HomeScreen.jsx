import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function HomeScreen({ navigation, route}) {

  return (
    <View>
      <Text>HomeScreen</Text>

      <Button
        mode='contained'
        onPress={() => navigation.openDrawer() }
      >
        Abrir gaveta
      </Button>

      <Button
        mode='contained-tonal'
        onPress={ () => {
          navigation.openDrawer()
          setTimeout(() => navigation.closeDrawer(), 3000)
        }}
      >
        Abrir gaveta e fechar automatico
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({})