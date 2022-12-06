import { StyleSheet } from 'react-native';
import { colors } from './colors';

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
    backgroundColor: colors.white,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    borderRadius: 5,
    color: colors.black,
    padding: 10,
  },
  errorContainer: {
    height: 20,
  },
  error: {
    color: colors.salmon,
    // display: 'none',
    marginLeft: 10,
  },
});
