import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Graficos from '../screens/Graficos'
import Mapas from '../screens/Mapas'
import YoutubeVideo from '../screens/YoutubeVideo'


const Tabs = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name='YoutubeVideo'
        component={YoutubeVideo}
        options={{
          title: "Youtube",
          tabBarIcon: ({ color, size }) => (
            <Icon name="youtube" color={color} size={size} />
          )
        }}

      />

      <Tabs.Screen
        name='Graficos'
        component={Graficos}
        options={{
          title: "Gráficos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="chart-bar" color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name='Mapas'
        component={Mapas} 
        options={{
          title: "Mapas",
          tabBarIcon: ({ color, size }) => (
            <Icon name="map" color={color} size={size} />
          )
        }}
      />

    </Tabs.Navigator>
  )
}

const styles = StyleSheet.create({})