import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import AccountBalance from '../components/AccountBalance';
import Form from '../components/Form';

function Payment({ navigation }: DrawerContentComponentProps) {
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
      <AccountBalance amount={140234543} text={'Account balance'} />
      <Form
        inputs={inputs}
        button={'Send payment'}
        action={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Payment;
