import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';

import Home from './screens/Home';
import Loans from './screens/Loans';
import { colors } from './themes/colors';
import Payment from './screens/Payment';
import UserMenu from './screens/UserMenu';
import Themes from './screens/Themes';
import ChangePassword from './screens/ChangePassword';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from './screens/AccountScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

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
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Loans"
        component={Loans}
        options={{
          tabBarIconStyle: {
            color: colors.white,
          },
          tabBarIcon: ({ color, size }) => {
            return <Icon name="credit-card" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="paper-airplane" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
}
function MyDrawer() {
  const { isAuth } = useSelector((state: any) => state.auth);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: colors.white,
        headerStyle: { elevation: 0 },
        header: !isAuth ? () => {} : undefined,
        swipeEnabled: isAuth,
        unmountOnBlur: true,
      }}
      detachInactiveScreens={true}
      drawerContent={Props => <UserMenu {...Props} />}>
      <Drawer.Screen name="Stack" component={MyStack} />
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
