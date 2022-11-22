import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const buttonBig = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
