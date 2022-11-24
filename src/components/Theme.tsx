import React from 'react';
import { View } from 'react-native';
import { theme as styles } from '../themes/theme';

interface Props {
  colors: Array<string>;
}

const Theme = ({ colors }: Props) => {
  return (
    <View style={styles.container}>
      {colors.map(color => {
        return (
          <View key={color} style={{ ...styles.theme, borderColor: color }}>
            <View
              style={{
                ...styles.color,
                backgroundColor: color,
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Theme;
