import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  circle: {
    backgroundColor: colors.blue,
    borderRadius: 10000000,
    bottom: 450,
    height: 1000,
    left: -400,
    position: 'absolute',
    width: 1000,
  },
});
