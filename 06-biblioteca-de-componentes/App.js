import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Divider, Button } from 'react-native-paper'

export default function App() {

  const lista = ["uva", "Maça", "Banana", "Laranja"]


  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Button mode='contained' onPress={() => alert("Clicou")}>Clique AQUI!</Button>
        <Button mode='contained-tonal' >Clique AQUI!</Button>
        <Button icon="camera" mode='contained-tonal' >Clique AQUI!</Button>
        <Button mode='elevated' >Clique AQUI!</Button>
        <Button mode='outlined' >Clique AQUI!</Button>
        <Button mode='text' >Clique AQUI!</Button>

        <Text>Uva</Text>
        <Divider />
        <Text>maça</Text>
        <Divider />
        <Text>Banana</Text>
        <Divider />
        <Text>Laranja</Text>
        <Divider />

        <Text variant='titleLarge' >Um texto qualquer</Text>
        <Text variant='headlineLarge' >Um texto qualquer</Text>
        <Text variant='displayLarge' >Um texto qualquer</Text>

        <Card>
          <Card.Content>
            <Title>Título do Card</Title>
            <Paragraph>Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://i.pinimg.com/236x/65/92/d2/6592d22f05d29398784337cd02a37e26.jpg'}} />
        </Card>

       

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
