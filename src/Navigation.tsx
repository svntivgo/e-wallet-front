import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Loans from './screens/Loans';
import { colors } from './themes/colors';
import { Image } from 'react-native';
import Payment from './screens/Payment';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.white,
    card: colors.blue,
    text: colors.white,
  },
};

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => {},
          tabBarIcon: () => {
            return <Image source={require('./assets/icons/house.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Loans"
        component={Loans}
        options={{
          tabBarIcon: () => {
            return <Image source={require('./assets/icons/heart.png')} />;
          },
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarIcon: () => {
            return <Image source={require('./assets/icons/card.png')} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
function MyDrawer(navigation: any) {
  console.log('ruta: ', navigation);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { elevation: 0 },
      }}>
      <Drawer.Screen name="Tabs" component={MyTabs} />
    </Drawer.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}
