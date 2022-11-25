import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import AccountBalance from '../components/AccountBalance';
import Form from '../components/Form';

const Loans = () => {
  const { available } = useSelector((state: any) => state.user);

  const inputs: { logo: string; name: string; error: string }[] = [
    { logo: 'cash-multiple', name: 'Amount', error: '' },
    { logo: 'message-text-outline', name: 'Reason', error: '' },
  ];
  return (
    <View style={styles.container}>
      <AccountBalance amount={available} text={'Available to loan'} />
      <Form inputs={inputs} button={'Apply for loan'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Loans;
