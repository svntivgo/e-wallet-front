import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import AccountBalance from '../components/AccountBalance';
import UserMovements from '../components/UserMovements';
import { accountBalanceHome } from '../themes/accountBalance';
import { home as styles } from '../themes/home';
import { currencyHook } from '../hooks/currencyHook';
import { AuthContext } from '../context/AuthContext';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const Home = ({ navigation }: DrawerContentComponentProps) => {
  const { balance, lastMovements } = useSelector((state: any) => state.user);

  const { logout, userData, loggedIn } = useContext(AuthContext);
  console.log(userData);

  useEffect(() => {
    if (loggedIn === false) {
      navigation.navigate('Stack');
    }
  }, [loggedIn, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.containerBalance}>
        <View style={styles.circle} />
        <AccountBalance
          style={accountBalanceHome}
          amount={currencyHook(balance)}
          text="Balance in your account"
        />
      </View>
      <View style={styles.containerMovements}>
        <UserMovements movements={lastMovements} />
      </View>
    </View>
  );
};

export default Home;
