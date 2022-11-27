import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme as styles } from '../themes/theme';

interface Props {
  colors: Array<string>;
}

const Theme = ({ colors }: Props) => {
  const [focus, setFocus] = useState('');
  const handleColor = (color: string) => {
    setFocus(color);
    console.log('seleccionado', focus);
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
