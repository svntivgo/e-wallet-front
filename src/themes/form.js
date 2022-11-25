import { StyleSheet } from 'react-native';

export const form = StyleSheet.create({
  formContainer: {},
  formItem: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  logo: {
    flex: 1,
    paddingBottom: 20,
  },
  input: {
    flex: 6,
  },
  textInput: {
    backgroundColor: '#eaeaea',
    borderBottomColor: '#777777',
    borderBottomWidth: 1,
    borderRadius: 5,
    color: 'black',
    padding: 10,
  },
  errorContainer: {
    height: 20,
  },
  error: {
    color: 'red',
    display: 'none',
    marginLeft: 10,
  },
});
