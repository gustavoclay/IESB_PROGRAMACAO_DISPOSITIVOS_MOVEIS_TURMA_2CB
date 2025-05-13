import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TabRoutes from './TabRoutes'
import StackRoutes from './StackRoutes'
import ListaStackRoutes from './ListaStackRoutes'

import { Ionicons } from '@expo/vector-icons'


import Configuracoes from '../screens/configuracoes/Configuracoes'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Usuario"
        component={StackRoutes}
        options={{
          title: 'Usuários',
          drawerIcon: ({ color, size }) => <Ionicons name="people-outline" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{
          title: 'Configurações',
          drawerIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Lista"
        component={ListaStackRoutes}
        options={{
          title: 'Lista',
          drawerIcon: ({ color, size }) => <Ionicons name="car-outline" size={size} color={color} />,
        }}
      />

    </Drawer.Navigator>
  )
}
