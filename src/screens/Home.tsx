import React from 'react';
import AccountBalance from '../components/AccountBalance';
import { accountBalanceHome } from '../themes/accountBalance';

const Home = () => {
  return (
    <AccountBalance
      style={accountBalanceHome}
      amount={999999999}
      text="Balance in your account"
    />
  );
};

export default Home;
