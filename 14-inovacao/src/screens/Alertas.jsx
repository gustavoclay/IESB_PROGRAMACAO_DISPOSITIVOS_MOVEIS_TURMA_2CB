import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';

export default function Alertas() {

  const showToastSuccess = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }

  const showToastError = () => {
    Toast.show({
      type: 'error',
      text1: 'Oops!',
      text2: 'Something went wrong 😞'
    });
  }

  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: 'Hello',
      text2: 'This is an info message 👋'
    });
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      {/* O componente de alerta <Toast /> deve ser importado no app.js */}
      <Text>Alertas</Text>
      <Button mode='contained' onPress={showToast}>Show Toast</Button>
      <Button mode='contained' onPress={showToastSuccess}>Show Toast Success</Button>
      <Button mode='contained' onPress={showToastError}>Show Toast Error</Button>
      <Button mode='contained' onPress={showToast}>Show Toast Info</Button>
    </View>
  )
}
