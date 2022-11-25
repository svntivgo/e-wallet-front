import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import AccountBalance from '../components/AccountBalance';
import Form from '../components/Form';

function Payment() {
  const { balance } = useSelector((state: any) => state.user);

  const inputs: { logo: string; name: string; error: string }[] = [
    {
      logo: 'account-arrow-left-outline',
      name: 'User`s email or phone number',
      error: '',
    },
    { logo: 'cash-multiple', name: 'Amount', error: '' },
    { logo: 'message-text-outline', name: 'Reason', error: '' },
  ];

  return (
    <View style={styles.container}>
      <AccountBalance amount={balance} text={'Account balance'} />
      <Form inputs={inputs} button={'Send payment'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Payment;
