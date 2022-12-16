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
  const phoneError = useRef('');
  const nameError = useRef('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [request, setRequest] = useState({ phone: '', fullName: '' });

  const phoneHandler = useCallback(
    (e: any) => {
      if (isNaN(e) || e > 10000000000 || e < 999999999) {
        phoneError.current = 'Invalid number';
        setPhone('');
        setRequest({ ...request, phone: '' });
      }
      if (!isNaN(e) && String(e).length === 10) {
        phoneError.current = '';
        setPhone(String(e));
        setRequest({ ...request, phone: e });
      }
    },
    [phone, request],
  );

  const nameHandler = useCallback(
    (e: any) => {
      if (!isNaN(e) || String(e).length < 3) {
        nameError.current = 'Invalid name';
        setName('');
        setRequest({ ...request, fullName: '' });
      }
      if (isNaN(e) && String(e).length > 3) {
        nameError.current = '';
        setName(String(e));
        setRequest({ ...request, fullName: e });
      }
    },
    [name, request],
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

    if (phoneError.current === '' && nameError.current === '') {
      await fetch(api.base + '/client', requestOptions)
        .then(response => response.json())
        .then(_response => {
          navigation.navigate('Stack');
        })
        .catch(err => console.log(err));
    }

    phone === '' && Alert.alert('Please enter a phone number.');
    name === '' && Alert.alert('Please enter a name.');
  };

  useEffect(() => {
    getClient();
  }, []);

  useEffect(() => {
    console.log(request);
    if (!isAuth) {
      navigation.dispatch(StackActions.replace('Login'));
    }
  }, [isAuth, navigation, phone, name]);

  return (
    <View style={{ padding: 20 }}>
      <View style={styles.formContainer}>
        <View style={styles.formItem}>
          <Icon style={styles.logo} name={'account'} size={25} />
          <View style={styles.input}>
            <TextInput
              onChangeText={(e: any) => {
                nameHandler(e);
              }}
              onEndEditing={() => {}}
              style={styles.textInput}
              placeholder={'Full Name'}
            />
            <View style={styles.errorContainer}>
              <Text style={styles.error}>{nameError.current}</Text>
            </View>
          </View>
        </View>
        <View style={styles.formItem}>
          <Icon style={styles.logo} name={'phone'} size={25} />
          <View style={styles.input}>
            <TextInput
              onChangeText={(e: any) => {
                phoneHandler(e);
              }}
              onEndEditing={() => {}}
              style={styles.textInput}
              placeholder={'Phone number'}
            />
            <View style={styles.errorContainer}>
              <Text style={styles.error}>{phoneError.current}</Text>
            </View>
          </View>
        </View>
        <ButtonBig text={'Enviar'} action={sendData} />
      </View>
    </View>
  );
}

export default CompleteInformation;
