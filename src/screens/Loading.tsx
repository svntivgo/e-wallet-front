import React, { useEffect, useContext } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';

function Loading({ navigation }: any) {
  const { loading, loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn) {
      navigation.navigate('Tabs');
    } else if (loggedIn === false) {
      navigation.dispatch(StackActions.replace('Login'));
    }
  }, [loggedIn, navigation]);

  return (
    <View style={styles.container}>
      {loading && (
        <React.Fragment>
          <ActivityIndicator size="large" />
          <View style={{ marginTop: 10 }}>
            <Text>Please wait...</Text>
          </View>
        </React.Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
