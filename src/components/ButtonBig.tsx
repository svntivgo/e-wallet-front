import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { buttonBig as styles } from '../themes/buttonBig';

interface Props {
  action?: () => void;
  text: string;
}

function ButtonBig({ text, action }: Props) {
  const { setting } = useSelector((state: any) => state.user);
  return (
    <TouchableOpacity
      onPress={action}
      style={{ ...styles.button, ...{ backgroundColor: setting.color } }}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default ButtonBig;
