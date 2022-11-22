import React from 'react';
import { Image, Text, View } from 'react-native';
import { topMenu as styles } from '../themes/topMenu';

interface Props {
  title: string;
}

const TopMenu = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../assets/img/top-menu/bars.png')}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TopMenu;
