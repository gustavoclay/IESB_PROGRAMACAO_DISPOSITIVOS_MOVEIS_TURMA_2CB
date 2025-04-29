import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CopaScreen from './screens/CopaScreen'
import EstadioScreen from './screens/EstadioScreen'
import BrasilScreen from './screens/BrasilScreen'
import EstatisticasScreen from './screens/EstatisticasScreen'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   <PaperProvider>
    <NavigationContainer>
      <Tab.Navigator>

        {/* Copa */}
        <Tab.Screen
        name='CopaScreen'
        component={CopaScreen}
        options={{
          title: 'Copa 2022',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => <Ionicons name="trophy" color={color} size={size} />,
        }}
        />


        {/* Estádio */}
          <Tab.Screen
            name='EstadioScreen'
            component={EstadioScreen}
            options={{
              title: 'Estádios',
              headerTitleAlign: 'center',
              tabBarIcon: ({ color, size }) => <Ionicons name="ticket" color={color} size={size} />,
            }}
          />

        {/* Brasil */}

          <Tab.Screen
            name='BrasilScreen'
            component={BrasilScreen}
            options={{
              title: 'Seleção Brasileira',
              headerTitleAlign: 'center',
              tabBarIcon: ({ color, size }) => <Ionicons name="football" color={color} size={size} />,
            }}
          />
        {/* Estatísticas */}
          <Tab.Screen
            name='EstatisticasScreen'
            component={EstatisticasScreen}
            options={{
              title: 'Estatísticas',
              headerTitleAlign: 'center',
              tabBarIcon: ({ color, size }) => <Ionicons name="analytics" color={color} size={size} />,
            }}
          />



      </Tab.Navigator>
    </NavigationContainer>
   </PaperProvider>
  );
}
