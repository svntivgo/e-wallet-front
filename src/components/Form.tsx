import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { form as styles } from '../themes/form';
import ButtonBig from './ButtonBig';
interface Props {
  inputs: { logo: string; name: string; error: string }[];
  button: string;
  action?: () => void;
}

const Form = ({ inputs, button, action }: Props) => {
  return (
    <View style={styles.formContainer}>
      {inputs.map((input: any) => {
        return (
          <View key={input.name} style={styles.formItem}>
            <Icon style={styles.logo} name={input.logo} size={25} />
            <View style={styles.input}>
              <TextInput style={styles.textInput} placeholder={input.name} />
              <View style={styles.errorContainer}>
                <Text style={styles.error}>{input.error}</Text>
              </View>
            </View>
          </View>
        );
      })}
      <ButtonBig text={button} action={action} />
    </View>
  );
};

export default Form;
