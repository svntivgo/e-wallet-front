import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const accountBalanceHome = StyleSheet.create({
  container: {
    paddingBottom: 60,
    paddingHorizontal: 25,
    paddingTop: 15,
    zIndex: 2,
  },
  amount: {
    color: colors.white,
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: colors.white,
    fontSize: 15,
  },
});

export const accountBalanceLoaPay = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  amount: {
    color: 'black',
    fontSize: 36,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
