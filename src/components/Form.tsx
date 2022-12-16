import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { api } from '../common/api';
import { form as styles } from '../themes/form';
import ButtonBig from './ButtonBig';
interface Props {
  inputs: {
    logo?: string;
    name: string;
    placeholder: string;
    error: string;
    type?: string;
  }[];
  movementApi: string;
  button: string;
  action?: any;
}

const Form = ({ inputs, movementApi, button, action }: Props) => {
  const { account } = useSelector((state: any) => state.user);
  const { token } = useSelector((state: any) => state.auth);
  const [request, setRequest] = useState({
    idIncome: account,
    idOutcome: account,
  });
  const [typing, setTyping] = useState('');

  const textHandler = useCallback(
    (e: any, type: string, input) => {
      if (type === 'phoneEmail') {
        input.error = null;
        setTyping(e);
      }
      if (type === 'number' && isNaN(e)) {
        input.error = 'Invalid number';
        setTyping(e);
      }
      if (type === 'number' && !isNaN(e)) {
        input.error = null;
        setTyping(e);
        setRequest({ ...request, [input.name]: e });
      }
      if (type === 'text' && !isNaN(e)) {
        input.error = 'Invalid text';
        setTyping(e);
      }
      if ((type === 'text' && isNaN(e)) || e === '') {
        input.error = null;
        setTyping(e);
        setRequest({ ...request, [input.name]: e });
      }
    },
    [request],
  );

  const getAccountByClient = async (phoneEmail: string, input: any) => {
    const apiClient = `/account/phone-email/${phoneEmail}`;
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
        input.error = 'User not found';
        setTyping(phoneEmail);
        setRequest({ ...request });
        if (response.id) {
          input.error = '';
          setRequest({ ...request, idIncome: response.id });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const sendData = async () => {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(request),
    };

    await fetch(api.base + movementApi, requestOptions)
      .then(response => response.json())
      .then(_response => {
        action.navigate('Stack');
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    console.log(request);
  }, [request, typing]);

  return (
    <View style={styles.formContainer}>
      {inputs.map((input: any) => {
        return (
          <View key={input.name} style={styles.formItem}>
            {input.logo ? (
              <Icon style={styles.logo} name={input.logo} size={25} />
            ) : null}
            <View style={styles.input}>
              <TextInput
                onChangeText={(e: any) => textHandler(e, input.type, input)}
                onEndEditing={(e: any) => {
                  input.name === 'idIncome' &&
                    getAccountByClient(e.nativeEvent.text, input);
                }}
                style={styles.textInput}
                placeholder={input.placeholder}
              />
              <View style={styles.errorContainer}>
                <Text style={styles.error}>{input.error}</Text>
              </View>
            </View>
          </View>
        );
      })}
      <ButtonBig text={button} action={sendData} />
    </View>
  );
};

export default Form;
