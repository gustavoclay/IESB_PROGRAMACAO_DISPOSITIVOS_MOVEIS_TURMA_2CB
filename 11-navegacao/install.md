## Instalar react native paper
npm install react-native-paper react-native-vector-icons

## Instalar libs react navigation
npm install @react-navigation/native @react-navigation/drawer @react-navigation/bottom-tabs  @react-navigation/stack

## Instalar libs dependências react navigation e paper
npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context

## Configurar Drawer navigation

import 'react-native-gesture-handler';

App.js

## Babel config

´babel.config.js´

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};

```
