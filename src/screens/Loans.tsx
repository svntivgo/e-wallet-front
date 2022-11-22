import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonBig from '../components/ButtonBig';

const Loans = () => (
  <View style={styles.container}>
    <View style={styles.formItem}>
      <Text style={styles.logo}>Logo</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Soy un placeholder jeje"
        />
        <View style={styles.errorContainer}>
          <Text style={styles.error}>Error, oh no!</Text>
        </View>
      </View>
    </View>
    <View style={styles.formItem}>
      <Text style={styles.logo}>Logo</Text>
      <View style={styles.input}>
        <TextInput style={styles.textInput} placeholder="Amount" />
        <View style={styles.errorContainer}>
          <Text style={styles.error}>Error, oh no!</Text>
        </View>
      </View>
    </View>
    <View style={styles.formItem}>
      <Text style={styles.logo}>Logo</Text>
      <View style={styles.input}>
        <TextInput style={styles.textInput} placeholder="Reason" />
        <View style={styles.errorContainer}>
          <Text style={styles.error}>Error, oh no!</Text>
        </View>
      </View>
    </View>
    <ButtonBig text={'Apply for loan'} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  input: {
    flex: 4,
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

export default Loans;
