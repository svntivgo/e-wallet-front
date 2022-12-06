import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const userMenu = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  containerUser: {
    alignItems: 'center',
  },
  photo: {
    borderRadius: 100,
    height: 125,
    width: 125,
  },
  name: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  containerMenu: {
    marginTop: 60,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  icon: {
    flex: 1,
    textAlign: 'center',
  },
  text: {
    flex: 4,
    fontSize: 18,
  },
  logo: {
    alignSelf: 'center',
    bottom: 60,
    position: 'absolute',
    width: 150,
  },
});
