import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const accountBalanceHome = StyleSheet.create({
  container: {
    paddingBottom: 60,
    paddingHorizontal: 25,
    paddingTop: 15,
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
