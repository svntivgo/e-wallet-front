import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import AccountBalance from '../components/AccountBalance';
import Form from '../components/Form';
import { accountBalanceLoaPay } from '../themes/accountBalance';
import { currencyHook } from '../hooks/currencyHook';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

function Payment({ navigation }: BottomTabScreenProps<any>) {
  const { balance } = useSelector((state: any) => state.user);
  const apiMovement = '/movement/payment';
  const inputs: {
    logo: string;
    name: string;
    placeholder: string;
    type: string;
    error: string;
  }[] = [
    {
      logo: 'account-arrow-left-outline',
      name: 'idIncome',
      placeholder: 'User`s email or phone number',
      type: 'phoneEmail',
      error: '',
    },
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

  return (
    <View style={styles.container}>
      <AccountBalance
        style={accountBalanceLoaPay}
        amount={currencyHook(balance)}
        text={'Account balance'}
      />
      <Form
        inputs={inputs}
        movementApi={apiMovement}
        button={'Send payment'}
        action={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Payment;
