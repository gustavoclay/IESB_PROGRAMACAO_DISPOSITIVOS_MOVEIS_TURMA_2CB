import React from 'react';
import 'react-native-gesture-handler';

import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import DrawerRoutes from './src/routes/DrawerRoutes';


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <DrawerRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}
