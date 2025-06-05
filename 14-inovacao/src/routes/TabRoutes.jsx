import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Alertas from '../screens/Alertas'
import BiscoitoDaSorte from '../screens/BiscoitoDaSorte'
import Cronometro from '../screens/Cronometro'
import DatePicker from '../screens/DatePicker'
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

      <Tabs.Screen
        name='Alertas'
        component={Alertas}
        options={{
          title: "Alertas",
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name='DatePicker'
        component={DatePicker}
        options={{
          title: "Date Picker",
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name='Cronometro'
        component={Cronometro}
        options={{
          title: "Cronômetro",
          tabBarIcon: ({ color, size }) => (
            <Icon name="stopwatch" color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name='BiscoitoDaSorte'
        component={BiscoitoDaSorte}
        options={{
          title: "Biscoito da Sorte",
          tabBarIcon: ({ color, size }) => (
            <Icon name="cookie" color={color} size={size} />
          )
        }}
      />

    </Tabs.Navigator>
  )
}

const styles = StyleSheet.create({})