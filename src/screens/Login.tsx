import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/authSlice';
import Form from '../components/Form';

const Login = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const inputs: { logo?: string; name: string; error: string }[] = [
    { name: 'Email or Username', error: '' },
  ];
  const dispatch = useDispatch();
  const signIn = () => {
    dispatch(setAuth('payload'));
    navigation.navigate('Tabs');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        MATERIAL <Text style={styles.span}>2</Text> UI
      </Text>
      <Text style={styles.reference}>Login or sign up for free</Text>
      <Form button="CONTINUE" inputs={inputs} action={signIn} />
      <View style={styles.line}>
        <Text style={styles.register}>register</Text>
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={signIn}>
        <Text style={styles.registerText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={signIn}>
        <Text style={styles.registerText}>Sign in with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 60,
    width: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 60,
  },
  span: {
    color: 'purple',
  },
  reference: {
    textAlign: 'center',
    marginBottom: 20,
  },
  line: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  register: {
    width: 60,
    textAlign: 'center',
    backgroundColor: 'white',
    marginBottom: -10,
  },
  registerButton: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    padding: 15,
    marginBottom: 25,
  },
  registerText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Login;
