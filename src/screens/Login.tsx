import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/authSlice';

const Login = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const dispatch = useDispatch();
  const signIn = () => {
    dispatch(setAuth('payload'));
    navigation.navigate('Tabs');
  };

  return (
    <View style={{ paddingVertical: 100 }}>
      <Text>Estás en login</Text>
      <TouchableOpacity onPress={signIn}>
        <Text>Jeje</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
