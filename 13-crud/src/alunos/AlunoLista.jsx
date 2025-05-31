import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'
import AlunoService from './AlunoService'

export default function AlunoLista({ navigation, route }) {

  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    buscarAlunos()
  }, [])

  async function buscarAlunos() {
    const listaAlunos = await AlunoService.listar()
    setAlunos(listaAlunos)
  }

  async function removerAluno(id) {
    await AlunoService.remover(id)
    alert('Aluno excluído com sucesso!!!')
    buscarAlunos()
  }

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
              <Button icon='pencil' onPress={() => navigation.navigate('AlunoForm', item)}> </Button>
              <Button icon='delete' onPress={() => removerAluno(item.id)}> </Button>
            </Card.Actions>
          </Card>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({})