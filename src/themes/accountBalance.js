import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const accountBalanceHome = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 25,
    paddingBottom: 60,
    backgroundColor: colors.blue,
  },
  amount: {
    color: colors.white,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: colors.white,
    fontSize: 15,
  },
});
