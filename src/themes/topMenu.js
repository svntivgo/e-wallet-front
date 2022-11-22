import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const topMenu = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    flexDirection: 'row',
    height: 60,
    left: 0,
    paddingHorizontal: 20,
    right: 0,
    top: 0,
  },
  icon: {
    marginRight: 40,
  },
  title: {
    color: colors.white,
    fontSize: 25,
  },
});
