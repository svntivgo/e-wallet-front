import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { api } from '../common/api';
import { form as styles } from '../themes/form';
import ButtonBig from './ButtonBig';
interface Props {
  inputs: { logo?: string; name: string; error: string; type: string }[];
  button: string;
  action?: any;
}

const Form = ({ inputs, button, action }: Props) => {
  const { account } = useSelector((state: any) => state.user);
  const [request, setRequest] = useState({
    idIncome: account,
    idOutcome: account,
  });
  const [typing, setTyping] = useState('');

  const textHandler = useCallback(
    (e: any, type: string, input) => {
      if (type === 'number' && isNaN(e)) {
        input.error = 'Invalid number';
        setTyping(e);
      }
      if (type === 'number' && !isNaN(e)) {
        input.error = null;
        setRequest(e);
        setRequest({ ...request, [input.name.toLocaleLowerCase()]: e });
      }
      if (type === 'text' && !isNaN(e)) {
        input.error = 'Invalid text';
        setTyping(e);
      }
      if ((type === 'text' && isNaN(e)) || e === '') {
        input.error = null;
        setRequest(e);
        setRequest({ ...request, [input.name.toLocaleLowerCase()]: e });
      }
    },
    [request],
  );

  const sendData = async () => {
    const apiMovement = '/movement/loan';
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(request),
    };

    await fetch(api.base + apiMovement, requestOptions)
      .then(response => response.json())
      .then(_response => {
        action.navigate('Stack');
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {}, [request, typing]);

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
                style={styles.textInput}
                placeholder={input.name}
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
