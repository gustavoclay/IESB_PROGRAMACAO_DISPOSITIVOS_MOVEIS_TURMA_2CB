import { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

export default function AlunoLista({ navigation, route }) {

  const [alunos, setAlunos] = useState([
    {
      id: '1',
      nome: "Teste",
      cpf: "0010010101",
      email: "teste@t.com",
      dataNascimento: "02/02/2000",
      telefone: "(61)90000-0001"
    },
    {
      id: '2',
      nome: "Teste",
      cpf: "0010010101",
      email: "teste@t.com",
      dataNascimento: "02/02/2000",
      telefone: "(61)90000-0001"
    }
  ])


  return (
    <View>
      <Button
        style={{ marginTop: 10 }}
        icon='plus'
        mode='contained'
        onPress={() => navigation.navigate('AlunoForm')}
      >
        Cadastrar
      </Button>

      <FlatList
        data={alunos}
        renderItem={({ item }) => (
          <Card style={{ margin: 10 }}>
            <Card.Content>
              <Text>ID: {item.id}</Text>
              <Text>Nome: {item.nome}</Text>
              <Text>CPF: {item.cpf}</Text>
              <Text>Email: {item.email}</Text>
            </Card.Content>
            <Card.Actions>
              <Button>Editar</Button>
              <Button>Excluir</Button>
            </Card.Actions>
          </Card>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({})