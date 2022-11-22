import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  style?: any;
  amount: number;
  text: string;
}

function AccountBalance({ style, amount, text }: Props) {
  return (
    <View style={style?.container}>
      <Text style={style?.amount}>$ {amount}</Text>
      <Text style={style?.text}>{text}</Text>
    </View>
  );
}

export default AccountBalance;
