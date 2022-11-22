import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const accountBalanceHome = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 25,
    backgroundColor: colors.blue,
  },
  amount: {
    marginVertical: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: colors.white,
  },
  text: {
    fontSize: 20,
    color: colors.white,
  },
});
