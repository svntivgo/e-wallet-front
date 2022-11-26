import React, { useContext, useEffect } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { userMenu as styles } from '../themes/userMenu';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { unsetAuth } from '../redux/authSlice';
import { AuthContext } from '../context/AuthContext';

const UserMenu = ({ navigation }: DrawerContentComponentProps) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: any) => state.user);
  const { logout, userData, loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn === false) {
      navigation.navigate('Stack');
    }
  }, [loggedIn, navigation]);
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
        <Text style={styles.name}>{userData?.name || ''}</Text>
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
