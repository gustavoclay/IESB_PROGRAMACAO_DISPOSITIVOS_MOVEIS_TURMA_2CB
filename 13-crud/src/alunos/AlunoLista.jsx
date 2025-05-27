import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'

export default function AlunoLista({ navigation, route }) {


  return (
    <View>
      <Button
        icon='plus'
        mode='contained'
        onPress={() => navigation.navigate('AlunoForm')}
      >
        Cadastrar
      </Button>




    </View>
  )
}

const styles = StyleSheet.create({})