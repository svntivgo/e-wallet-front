import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme as styles } from '../themes/theme';

interface Props {
  colors: Array<string>;
}

const Theme = ({ colors }: Props) => {
  return (
    <View style={styles.container}>
      {colors.map(color => {
        return (
          <TouchableOpacity
            key={color}
            style={{ ...styles.theme, borderColor: color }}>
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
