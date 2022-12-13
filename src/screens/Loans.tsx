import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AccountBalance from '../components/AccountBalance';
import Form from '../components/Form';
import { accountBalanceLoaPay } from '../themes/accountBalance';
import { currencyHook } from '../hooks/currencyHook';
import { setAvailable } from '../redux/userSlice';
import { api } from '../common/api';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

const Loans = ({ navigation }: BottomTabScreenProps<any>) => {
  const { available, id } = useSelector((state: any) => state.user);
  const apiMovement = '/movement/loan';
  const inputs: {
    logo: string;
    name: string;
    placeholder: string;
    type?: string;
    error: string;
  }[] = [
    {
      logo: 'cash-multiple',
      name: 'amount',
      placeholder: 'Amount',
      type: 'number',
      error: '',
    },
    {
      logo: 'message-text-outline',
      name: 'reason',
      placeholder: 'Reason',
      type: 'text',
      error: '',
    },
  ];

  const dispatch = useDispatch();

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  const apiAccount = `/account/${id}`;

  useEffect(() => {
    fetch(api.base + apiAccount, requestOptions)
      .then(response => response.json())
      .then(response => dispatch(setAvailable(response.credit)))
      .catch(error => console.log(error));
  }, [apiAccount, dispatch, requestOptions]);

  return (
    <View style={styles.container}>
      <AccountBalance
        style={accountBalanceLoaPay}
        amount={currencyHook(available)}
        text={'Available to loan'}
      />
      <Form
        inputs={inputs}
        movementApi={apiMovement}
        button={'Apply for loan'}
        action={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Loans;
