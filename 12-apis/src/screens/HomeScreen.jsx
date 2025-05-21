import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React, { useEffect } from 'react'
import axios from 'axios'

export default function HomeScreen() {

  // Fazer algo quando o usuário entrar na tela (Componente for montado)
  useEffect(() => {
    // Tudo que eu quero fazer quando o usuário entrar na tela
    // vai aqui dentro
    // Fazer uma requisição para buscar a lista de usuários
    axios.get('https://dummyjson.com/users')
      .then(resposta => {
          console.log(resposta.data.users)
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [])

  return (
    <View style={styles.container}>
      



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})