import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const bottomMenu = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    bottom: 0,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    left: 0,
    paddingHorizontal: 50,
    position: 'absolute',
    right: 0,
  },
  card: {
    alignItems: 'center',
  },
  icon: {},
  texto: {
    color: colors.white,
    fontSize: 15,
  },
});
