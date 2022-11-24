import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Loans from './screens/Loans';
import { colors } from './themes/colors';
import { Image } from 'react-native';
import Payment from './screens/Payment';
import UserMenu from './screens/UserMenu';
import Themes from './screens/Themes';
import ChangePassword from './screens/ChangePassword';

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
        // children={Props => <Loans {...Props} />}
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
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: colors.white,
        headerStyle: { elevation: 0 },
      }}
      drawerContent={Props => <UserMenu {...Props} />}>
      <Drawer.Screen name="Tabs" component={MyTabs} />
      <Drawer.Screen name="Themes" component={Themes} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
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
