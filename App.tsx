/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import BottomMenu from './src/components/BottomMenu';
import TopMenu from './src/components/TopMenu';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <SafeAreaView style={style.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <TopMenu title="My App" />
        <Home />
        <BottomMenu />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
