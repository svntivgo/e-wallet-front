import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { userMenu as styles } from '../themes/userMenu';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const UserMenu = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerUser}>
        <Image
          style={styles.photo}
          source={require('../assets/images/user-profile.jpg')}
        />
        <Text style={styles.name}>Nombre de usuario</Text>
      </View>
      <View style={styles.containerMenu}>
        <TouchableOpacity style={styles.item}>
          <Icon style={styles.icon} name="lock" size={25} />
          <Text style={styles.text}>Change password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Themes')}
          style={styles.item}>
          <Icon style={styles.icon} name="paintbrush" size={25} />
          <Text style={styles.text}>Change theme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Icon style={styles.icon} name="sign-out" size={25} />
          <Text style={styles.text}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export default UserMenu;
