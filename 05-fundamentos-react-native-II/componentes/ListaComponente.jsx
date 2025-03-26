import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ListaComponente() {

  const lista = ["Uva", "Maçã", "Banana", "Laranja"]

  return (
    <View style={styles.container}>

      {lista.map((fruta) => <Text style={styles.texto}>{fruta}</Text>)}

      {lista.map(
        (fruta) => {
          return (
            <View style={styles.containerAmarelo}>
              <Text style={styles.texto}>{fruta}</Text>
            </View>
          )
        }
      )}

      {
        lista.map(
          (fruta) => {
            return (
              <View>
                <Text>{fruta}</Text>
              </View>
            )
          }
        )
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 20,
    fontWeight: 600
  },
  containerAmarelo: {
    backgroundColor: "yellow"
  }
})