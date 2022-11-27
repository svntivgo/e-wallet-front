import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import AccountBalance from '../components/AccountBalance';
import UserMovements from '../components/UserMovements';
import { accountBalanceHome } from '../themes/accountBalance';
import { home as styles } from '../themes/home';
import { currencyHook } from '../hooks/currencyHook';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

const Home = ({ navigation }: BottomTabScreenProps<any>) => {
  const { balance, lastMovements } = useSelector((state: any) => state.user);
  const { isAuth } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!isAuth) {
      navigation.navigate('Stack');
    }
  }, [isAuth, navigation]);

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
