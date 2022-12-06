import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { setSetting } from '../redux/userSlice';
import { theme as styles } from '../themes/theme';

interface Props {
  colors: Array<string>;
}

const Theme = ({ colors }: Props) => {
  const [focus, setFocus] = useState('');
  const { setting } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleColor = (color: string) => {
    setFocus(color);
    dispatch(setSetting({ ...setting, color: color }));
  };

  useEffect(() => {}, [focus]);

  return (
    <View style={styles.container}>
      {colors.map(color => {
        return (
          <TouchableOpacity
            key={color}
            onPress={() => handleColor(color)}
            style={{
              ...styles.theme,
              ...(focus == color
                ? { borderColor: color, borderWidth: 5 }
                : null),
            }}>
            <View
              style={{
                ...styles.color,
                backgroundColor: color,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Theme;
