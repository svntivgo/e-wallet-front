import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const userMovements = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  movement: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  movementFirst: {
    paddingTop: 110,
  },
  foto: {
    alignSelf: 'center',
    flex: 1,
    textAlign: 'center',
  },
  containerText: {
    flex: 3,
  },
  reason: {
    color: 'black',
    fontSize: 16,
  },
  date: {},
  amount: {
    flex: 2,
    fontSize: 16,
    textAlign: 'right',
  },
});
