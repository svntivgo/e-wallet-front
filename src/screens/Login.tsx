import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/authSlice';
import Form from '../components/Form';
import { login as styles } from '../themes/login';

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
        <Text
          style={styles.register}
          onPress={() => navigation.navigate('Register')}>
          register
        </Text>
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

export default Login;
