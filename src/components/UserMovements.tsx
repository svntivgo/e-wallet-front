import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { userMovements as styles } from '../themes/userMovements';

interface Props {
  movements: [
    {
      reason: string;
      date: Date;
      amount: number;
      user: {
        name: string;
      };
    },
  ];
}

const UserMovements = ({ movements }: Props) => {
  return (
    <ScrollView style={styles.container}>
      {movements.map((movement, i) => (
        <View
          key={`movement-${i}`}
          style={{
            ...styles.movement,
            ...(i == 0 ? styles.movementFirst : null),
          }}>
          <Text style={styles.foto}>Foto</Text>
          <View style={styles.containerText}>
            <Text style={styles.reason}>{movement.reason}</Text>
            <Text style={styles.date}>{movement.date}</Text>
          </View>
          <Text style={styles.amount}>$ {movement.amount}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default UserMovements;
