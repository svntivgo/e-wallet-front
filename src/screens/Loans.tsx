import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import AccountBalance from '../components/AccountBalance';
import Form from '../components/Form';
import { accountBalanceLoaPay } from '../themes/accountBalance';
import { currencyHook } from '../hooks/currencyHook';

const Loans = () => {
  const { available } = useSelector((state: any) => state.user);

  const inputs: { logo: string; name: string; error: string }[] = [
    { logo: 'cash-multiple', name: 'Amount', error: '' },
    { logo: 'message-text-outline', name: 'Reason', error: '' },
  ];
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
    padding: 20,
  },
});

export default Loans;
