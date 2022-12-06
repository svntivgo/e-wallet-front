import { colors } from './colors';

const { StyleSheet } = require('react-native');

export const themes = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
  containerTheme: {
    flex: 1,
  },
  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
});
