import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from '../components/Form';

function RegisterOld() {
  const inputs: { logo?: string; name: string; error: string }[] = [
    { logo: 'account-box-outline', name: 'Photo', error: '' },
    {
      logo: 'card-account-details-outline',
      name: 'Name and lastname',
      error: '',
    },
    { logo: 'email-outline', name: 'Email', error: '' },
    { logo: 'phone', name: 'Phone', error: '' },
    { logo: 'lastpass', name: 'Password', error: '' },
    { logo: 'form-textbox-password', name: 'Confirm password', error: '' },
  ];

  return (
    <View style={styles.container}>
      <Form button="REGISTER" inputs={inputs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
});

export default RegisterOld;
