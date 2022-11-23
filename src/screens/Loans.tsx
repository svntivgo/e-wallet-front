import React from 'react';
import { StyleSheet, View } from 'react-native';
import AccountBalance from '../components/AccountBalance';
import Form from '../components/Form';

const Loans = () => {
  const inputs: { logo: string; name: string; error: string }[] = [
    { logo: 'cash-multiple', name: 'Amount', error: '' },
    { logo: 'message-text-outline', name: 'Reason', error: '' },
  ];

  return (
    <View style={styles.Container}>
      <AccountBalance amount={50000000} text={'Available to loan'} />
      <Form inputs={inputs} button={'Apply for loan'} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default Loans;
