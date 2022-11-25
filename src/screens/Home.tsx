import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import AccountBalance from '../components/AccountBalance';
import UserMovements from '../components/UserMovements';
import { accountBalanceHome } from '../themes/accountBalance';

const Home = () => {
  const { balance, lastMovements } = useSelector((state: any) => state.user);
  return (
    <View style={styles.container}>
      <AccountBalance
        style={accountBalanceHome}
        amount={balance}
        text="Balance in your account"
      />
      <UserMovements movements={lastMovements} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
