import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const topMenu = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: colors.blue,
    top: 0,
    left: 0,
    right: 0,
  },
  icon: {
    marginRight: 40,
  },
  title: {
    fontSize: 25,
    color: colors.white,
  },
});
