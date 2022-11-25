import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import AccountBalance from '../components/AccountBalance';
import UserMovements from '../components/UserMovements';
import { accountBalanceHome } from '../themes/accountBalance';
import { home as styles } from '../themes/home';

const Home = () => {
  const { balance, lastMovements } = useSelector((state: any) => state.user);
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <AccountBalance
        style={accountBalanceHome}
        amount={balance}
        text="Balance in your account"
      />
      <UserMovements movements={lastMovements} />
    </View>
  );
};

export default Home;
