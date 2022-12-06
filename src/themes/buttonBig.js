import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const buttonBig = StyleSheet.create({
  button: {
    backgroundColor: colors.default,
    borderRadius: 5,
    height: 50,
    padding: 15,
  },
  buttonText: {
    alignSelf: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
});
