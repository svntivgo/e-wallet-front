import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const login = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 60,
    width: 50,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 60,
    textAlign: 'center',
  },
  span: {
    color: 'purple',
  },
  reference: {
    marginBottom: 20,
    textAlign: 'center',
  },
  line: {
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 30,
    marginTop: 25,
  },
  register: {
    backgroundColor: 'white',
    marginBottom: -10,
    textAlign: 'center',
    width: 60,
  },
  registerButton: {
    borderColor: 'grey',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 25,
    padding: 15,
  },
  registerText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
