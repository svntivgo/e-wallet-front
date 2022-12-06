import { StyleSheet } from 'react-native';

export const theme = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  theme: {
    borderRadius: 15,
    borderWidth: 1,
    height: 100,
    overflow: 'hidden',
    width: 100,
    marginVertical: 10,
  },
  color: {
    bottom: 55,
    height: 200,
    left: 40,
    position: 'relative',
    transform: [{ rotateZ: '-33deg' }],
    width: 100,
  },
});
