import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AccountBalance from '../components/AccountBalance';
import UserMovements from '../components/UserMovements';
import { accountBalanceHome } from '../themes/accountBalance';
import { home as styles } from '../themes/home';
import { currencyHook } from '../hooks/currencyHook';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  setSetting,
  setId,
  setAccount,
  setLastMovements,
  setName,
} from '../redux/userSlice';
import { api } from '../common/api';

const Home = ({ navigation }: BottomTabScreenProps<any>) => {
  const { balance, account, userData, id, setting } = useSelector(
    (state: any) => state.user,
  );
  const { isAuth, token } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  // console.log(userData.id);

  const initialData = React.useCallback(async () => {
    const apiClient = `/client/phone-email/${userData.email}`;
    const apiAccount = `/account/${id}`;
    const apiSetting = `/setting/${id}`;
    const apiLastMovements = `/movement/${account}`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    await fetch(api.base + apiClient, requestOptions)
      .then(response => response.json())
      .then(response => {
        dispatch(setId(response.id));
        dispatch(setName(response.fullName));
        if (response.phone === '' || response.fullName === '') {
          navigation.navigate('CompleteInformation');
        }
      })
      .catch(error => console.log(error));
    await fetch(api.base + apiAccount, requestOptions)
      .then(response => response.json())
      .then(response => {
        dispatch(setAccount(response));
      })
      .catch(error => console.log(error));
    await fetch(api.base + apiSetting, requestOptions)
      .then(response => response.json())
      .then(response => {
        dispatch(setSetting(response));
      })
      .catch(error => console.log(error));
    await fetch(api.base + apiLastMovements, requestOptions)
      .then(response => response.json())
      .then(response => {
        dispatch(setLastMovements(response));
      })
      .catch(error => console.log(error));
  }, [account, dispatch, id, navigation, token, userData.email]);

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
        <UserMovements />
      </View>
    </View>
  );
};

export default Home;
