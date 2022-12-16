import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';
import { form as styles } from '../themes/form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonBig from '../components/ButtonBig';

function CompleteInformation({ navigation }: any) {
  const { loading, loggedIn } = useContext(AuthContext);
  const { isAuth } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (isAuth) {
      // navigation.navigate('Tabs');
    } else if (!isAuth) {
      navigation.dispatch(StackActions.replace('Login'));
    }
  }, [isAuth, navigation]);

  return (
    <View style={styles.formContainer}>
      <View style={styles.formItem}>
        <Icon style={styles.logo} name={'phone'} size={25} />
        <View style={styles.input}>
          <TextInput
            onChangeText={() => {}}
            onEndEditing={() => {}}
            style={styles.textInput}
            placeholder={'Phone number'}
          />
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{''}</Text>
          </View>
        </View>
      </View>
      <View style={styles.formItem}>
        <Icon style={styles.logo} name={'lock'} size={25} />
        <View style={styles.input}>
          <TextInput
            onChangeText={() => {}}
            onEndEditing={() => {}}
            style={styles.textInput}
            placeholder={'Password'}
          />
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{''}</Text>
          </View>
        </View>
      </View>
      <View style={styles.formItem}>
        <Icon style={styles.logo} name={'lock'} size={25} />
        <View style={styles.input}>
          <TextInput
            onChangeText={() => {}}
            onEndEditing={() => {}}
            style={styles.textInput}
            placeholder={'Re-type password'}
          />
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{''}</Text>
          </View>
        </View>
      </View>
      <ButtonBig text={'Enviar'} action={() => {}} />
    </View>
  );
}

export default CompleteInformation;
