import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AccountBalance from '../components/AccountBalance';
import UserMovements from '../components/UserMovements';
import { accountBalanceHome } from '../themes/accountBalance';
import { home as styles } from '../themes/home';
import { currencyHook } from '../hooks/currencyHook';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { setBalance, setSetting, setId } from '../redux/userSlice';
import { api } from '../common/api';

const Home = ({ navigation }: BottomTabScreenProps<any>) => {
  const { balance, lastMovements, userData, id, setting } = useSelector(
    (state: any) => state.user,
  );
  const { isAuth } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const initialData = React.useCallback(async () => {
    const apiClient = `/client/phone-email/${userData.email}`;
    const apiAccount = `/account/${id}`;
    const apiSetting = `/setting/${id}`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    };

    await fetch(api.base + apiClient, requestOptions)
      .then(response => response.json())
      .then(response => {
        dispatch(setId(response.id));
      })
      .catch(error => console.log(error));
    await fetch(api.base + apiAccount, requestOptions)
      .then(response => response.json())
      .then(response => {
        dispatch(setBalance(response.balance));
      })
      .catch(error => console.log(error));
    await fetch(api.base + apiSetting, requestOptions)
      .then(response => response.json())
      .then(response => {
        dispatch(setSetting(response));
      })
      .catch(error => console.log(error));
  }, [dispatch, id, userData.email]);

  useEffect(() => {
    initialData();
    if (!isAuth) {
      navigation.navigate('Stack');
    }
  }, [initialData, isAuth, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.containerBalance}>
        <View
          style={{ ...styles.circle, ...{ backgroundColor: setting.color } }}
        />
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
