import { StyleSheet } from 'react-native';
import { BounceInLeft } from 'react-native-reanimated';
import { colors } from './colors';

export const userMovements = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
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
    flex: 5,
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
