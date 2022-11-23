import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonBig from './ButtonBig';

interface Props {
  inputs: { logo: string; name: string; error: string }[];
  button: string;
}

const Form = ({ inputs, button }: Props) => {
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
      <ButtonBig text={button} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 10,
  },
  formItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  logo: {
    flex: 1,
    paddingBottom: 20,
    textAlign: 'center',
  },
  input: {
    flex: 6,
  },
  textInput: {
    backgroundColor: '#eaeaea',
    borderBottomWidth: 1,
    borderBottomColor: '#777777',
    padding: 10,
    color: 'black',
    borderRadius: 5,
  },
  errorContainer: {
    height: 20,
  },
  error: {
    display: 'none',
    color: 'red',
    marginLeft: 10,
  },
});

export default Form;
