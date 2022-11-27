import React, { useContext, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { userMenu as styles } from '../themes/userMenu';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { AuthContext } from '../context/AuthContext';

const UserMenu = ({ navigation }: DrawerContentComponentProps) => {
  const { userData } = useSelector((state: any) => state.user);
  const { isAuth } = useSelector((state: any) => state.auth);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuth) {
      navigation.navigate('Stack');
    }
  }, [isAuth, navigation]);
  // const signOut = () => {
  //   Alert.alert('Sign Out', '¿Are you sure?', [
  //     { text: 'No', onPress: () => {} },
  //     { text: 'Yes', onPress: () => dispatch(unsetAuth('payload')) },
  //   ]);
  //   navigation.navigate('Login');
  // };

  return (
    <View style={styles.container}>
      <View style={styles.containerUser}>
        <Image
          style={styles.photo}
          source={{ uri: userData?.picture || undefined }}
        />
        <Text style={styles.name}>{userData?.given_name || ''}</Text>
      </View>
      <View style={styles.containerMenu}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChangePassword')}
          style={styles.item}>
          <Icon style={styles.icon} name="lock" size={25} />
          <Text style={styles.text}>Change password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Themes')}
          style={styles.item}>
          <Icon style={styles.icon} name="paintbrush" size={25} />
          <Text style={styles.text}>Change theme</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => logout()} style={styles.item}>
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
