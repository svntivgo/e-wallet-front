import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonBig as styles } from '../themes/buttonBig';

interface Props {
  action?: () => void;
  text: string;
}

function ButtonBig({ text, action }: Props) {
  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default ButtonBig;
