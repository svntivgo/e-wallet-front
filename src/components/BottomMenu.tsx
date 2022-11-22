import React from 'react';
import { Image, Text, View } from 'react-native';
import { bottomMenu as styles } from '../themes/bottomMenu';
const BottomMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.icon}
          source={require('../assets/img/bottom-menu/house.png')}
        />
        <Text style={styles.texto}>Account</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.icon}
          source={require('../assets/img/bottom-menu/heart.png')}
        />
        <Text style={styles.texto}>Loans</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.icon}
          source={require('../assets/img/bottom-menu/card.png')}
        />
        <Text style={styles.texto}>Payment</Text>
      </View>
    </View>
  );
};

export default BottomMenu;
