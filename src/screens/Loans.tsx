import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AccountBalance from '../components/AccountBalance';
import Form from '../components/Form';
import { accountBalanceLoaPay } from '../themes/accountBalance';
import { currencyHook } from '../hooks/currencyHook';
import { setAvailable } from '../redux/userSlice';
import { api } from '../common/api';

const Loans = () => {
  const { available } = useSelector((state: any) => state.user);

  const inputs: { logo: string; name: string; error: string }[] = [
    { logo: 'cash-multiple', name: 'Amount', error: 'Mensaje de error' },
    { logo: 'message-text-outline', name: 'Reason', error: '' },
  ];

  const { id } = useSelector((state: any) => state.user);
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
      <Form inputs={inputs} button={'Apply for loan'} />
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
