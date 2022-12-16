import React, { useEffect, useRef, useCallback, useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { form as styles } from '../themes/form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonBig from '../components/ButtonBig';
import { api } from '../common/api';

function CompleteInformation({ navigation }: any) {
  const { isAuth, token } = useSelector((state: any) => state.auth);
  const { userData } = useSelector((state: any) => state.user);
  const error = useRef('');
  const [phone, setPhone] = useState('');
  const [request, setRequest] = useState({ phone: '' });

  const textHandler = useCallback(
    (e: any) => {
      if (isNaN(e) || e > 10000000000 || e < 999999999) {
        error.current = 'Invalid number';
        setPhone('');
        setRequest({ ...request, phone: '' });
      }
      if (!isNaN(e) && String(e).length === 10) {
        error.current = '';
        setPhone(String(e));
        setRequest({ ...request, phone: e });
      }
    },
    [phone, request],
  );

  const getClient = useCallback(async () => {
    const apiClient = `/client/phone-email/${userData.email}`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    await fetch(api.base + apiClient, requestOptions)
      .then(response => response.json())
      .then(response => {
        setRequest(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, [token, userData.email]);

  const sendData = async () => {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(request),
    };

    phone !== '' &&
      (await fetch(api.base + '/client', requestOptions)
        .then(response => response.json())
        .then(_response => {
          navigation.navigate('Stack');
        })
        .catch(err => console.log(err)));

    phone === '' && Alert.alert('Please enter a phone number.');
  };

  useEffect(() => {
    getClient();
  }, []);

  useEffect(() => {
    console.log(request);
    if (!isAuth) {
      navigation.dispatch(StackActions.replace('Login'));
    }
  }, [isAuth, navigation, phone]);

  return (
    <View style={{ padding: 20 }}>
      <View style={styles.formContainer}>
        <View style={styles.formItem}>
          <Icon style={styles.logo} name={'phone'} size={25} />
          <View style={styles.input}>
            <TextInput
              onChangeText={(e: any) => {
                textHandler(e);
              }}
              onEndEditing={() => {}}
              style={styles.textInput}
              placeholder={'Phone number'}
            />
            <View style={styles.errorContainer}>
              <Text style={styles.error}>{error.current}</Text>
            </View>
          </View>
        </View>
        <ButtonBig text={'Enviar'} action={sendData} />
      </View>
    </View>
  );
}

export default CompleteInformation;
