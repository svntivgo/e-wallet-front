import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonBig from '../components/ButtonBig';
import Form from '../components/Form';

const ChangePassword = ({ navigation }) => {
  const inputs: { logo: string; name: string; error: string }[] = [
    { logo: 'lock-clock', name: 'Current password', error: '' },
    { logo: 'lock-plus-outline', name: 'New password', error: '' },
    { logo: 'form-textbox-password', name: 'Retype new password', error: '' },
  ];

  return (
    <View style={styles.container}>
      <Form button="Change password" inputs={inputs} />
      <ButtonBig text={'Cancel'} action={() => navigation.navigate('Tabs')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },
});

export default ChangePassword;
