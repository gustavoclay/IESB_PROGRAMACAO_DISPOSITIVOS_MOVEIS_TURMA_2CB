// import das telas
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ConfigScreen from '../screens/ConfigScreen'

import ListaScreen from '../screens/ListaScreen'
import ItemScreen from '../screens/ItemScreen'

// import do stack
import { createStackNavigator } from "@react-navigation/stack"

// Criando stack
const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='ListaScreen' component={ListaScreen} />
      <Stack.Screen name='ItemScreen' component={ItemScreen} />

      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: "Início",
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='ConfigScreen' component={ConfigScreen} />

    </Stack.Navigator>
  )
}
