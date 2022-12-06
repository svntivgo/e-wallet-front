import React from 'react';
import { CompositeScreenProps } from '@react-navigation/native';
import { Text, View } from 'react-native';
import ButtonBig from '../components/ButtonBig';
import Theme from '../components/Theme';
import { themes as styles } from '../themes/themes';
import { useDispatch, useSelector } from 'react-redux';
import { setSetting } from '../redux/userSlice';
import { api } from '../common/api';
import { colors } from '../themes/colors';

const Themes = ({ navigation }: CompositeScreenProps<any, any>) => {
  const colorsArray: Array<string> = [
    colors.blue,
    colors.green,
    colors.gray,
    colors.orange,
    colors.pink,
    colors.salmon,
    colors.sea,
    colors.wine,
    colors.yellow,
  ];

  const { setting } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const saveSetting = async () => {
    const apiSetting = `/setting`;
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(setting),
    };

    await fetch(api.base + apiSetting, requestOptions)
      .then(response => response.json())
      .then(response => {
        dispatch(setSetting(response));
        navigation.navigate('Tabs');
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your theme</Text>
      <Text style={styles.text}>You can always change this at any time</Text>
      <Theme colors={colorsArray} />
      <View style={styles.containerButtons}>
        <ButtonBig text={'CANCEL'} action={() => navigation.navigate('Tabs')} />
        <ButtonBig text={'ACCEPT'} action={() => saveSetting()} />
      </View>
    </View>
  );
};

export default Themes;
