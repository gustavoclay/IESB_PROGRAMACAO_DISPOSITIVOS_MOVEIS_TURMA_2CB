import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'


export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <Text variant='headlineLarge' style={{ textAlign: 'center' }}>Tela de Início</Text>

        <Card style={{ width: '90%', height: '90%' }}>
          <Card.Content>
            <Title>Um título</Title>
            <Paragraph>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} resizeMode='stretch' style={{height: 400}} />
        </Card>
      </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  }
})