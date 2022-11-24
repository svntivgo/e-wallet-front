import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import ButtonBig from '../components/ButtonBig';
import Theme from '../components/Theme';
import { themes as styles } from '../themes/themes';

const Themes = ({ navigation }: DrawerContentComponentProps) => {
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
        <ButtonBig text={'CANCEL'} action={() => navigation.navigate('Home')} />
        <ButtonBig text={'ACCEPT'} action={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

export default Themes;
