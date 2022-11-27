import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';

const Account = ({ navigation }: any) => {
  const { logout, loggedIn, userData } = useContext(AuthContext);
  const { isAuth } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!isAuth) {
      navigation.dispatch(StackActions.replace('Login'));
    }
  }, [isAuth, navigation]);

  return (
    <View style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      {userData && (
        <View style={styles.userContainer}>
          <Image
            source={{ uri: userData.picture }}
            style={{ width: 200, height: 200 }}
          />
          <View style={styles.textContainer}>
            <Text>{userData.name}</Text>
          </View>
        </View>
      )}

      <Button onPress={() => logout()} title="Logout" />
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
  userContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    marginTop: 10,
  },
});

export default Account;
