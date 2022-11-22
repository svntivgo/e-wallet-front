import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonBig as styles } from '../themes/buttonBig';

interface Props {
  // onPress?: () => void;
  text: string;
}

function ButtonBig({ text }: Props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default ButtonBig;
