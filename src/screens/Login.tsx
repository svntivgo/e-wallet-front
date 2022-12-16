import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';

const Login = ({ navigation }: any) => {
  const { isAuth } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (isAuth) {
      navigation.navigate('Tabs');
    }
  }, [isAuth, navigation]);

  const { login } = useContext(AuthContext);

  return (
    <View style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <Button onPress={() => login()} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
