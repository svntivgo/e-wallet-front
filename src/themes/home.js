import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  containerBalance: {
    flex: 1,
    zIndex: 2,
  },
  circle: {
    backgroundColor: colors.default,
    borderRadius: 10000000,
    bottom: 0,
    height: 1000,
    left: -400,
    position: 'absolute',
    width: 1000,
  },
  containerMovements: {
    flex: 3,
    marginTop: -110,
  },
});
