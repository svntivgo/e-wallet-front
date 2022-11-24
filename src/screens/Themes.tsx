import React from 'react';
import { Text, View } from 'react-native';
import ButtonBig from '../components/ButtonBig';
import Theme from '../components/Theme';
import { themes as styles } from '../themes/themes';

const Themes = () => {
  const colors: Array<string> = [
    'blue',
    'purple',
    'orange',
    'red',
    'grey',
    'green',
    'teal',
    'cyan',
    'black',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your theme</Text>
      <Text style={styles.text}>You can always change this at any time</Text>
      <Theme colors={colors} />
      <View style={styles.containerButtons}>
        <ButtonBig text={'CANCEL'} />
        <ButtonBig text={'ACCEPT'} />
      </View>
    </View>
  );
};

export default Themes;
