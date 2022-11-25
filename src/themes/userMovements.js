import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const userMovements = StyleSheet.create({
  containerMovements: {
    paddingVertical: 15,
  },
  movement: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  foto: {
    flex: 2,
    textAlign: 'center',
    alignSelf: 'center',
  },
  containerText: {
    flex: 4,
  },
  reason: {
    fontSize: 18,
    color: 'black',
  },
  date: {},
  amount: {
    flex: 3,
    fontSize: 18,
    textAlign: 'right',
  },
});
