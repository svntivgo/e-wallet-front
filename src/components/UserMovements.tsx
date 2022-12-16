import React, { useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { currencyHook } from '../hooks/currencyHook';
import { dateHook } from '../hooks/dateHook';
import { userMovements as styles } from '../themes/userMovements';

// interface Props {
//   movements: [
//     {
//       reason: string;
//       datetime: string;
//       amount: number;
//       user: {
//         name: string;
//       };
//     },
//   ];
// }

const UserMovements = () => {
  const { lastMovements } = useSelector((state: any) => state.user);
  useEffect(() => {}, [lastMovements]);

  return (
    <ScrollView style={styles.container}>
      {lastMovements.length > 0 &&
        lastMovements.map((movement: any, i: any) => (
          <View
            key={`movement-${i}`}
            style={{
              ...styles.movement,
              ...(i == 0 ? styles.movementFirst : null),
            }}>
            <Text style={styles.foto}>Foto</Text>
            <View style={styles.containerText}>
              <Text style={styles.reason}>{movement.reason}</Text>
              <Text style={styles.date}>{dateHook(movement.datetime)}</Text>
            </View>
            <Text style={styles.amount}>$ {currencyHook(movement.amount)}</Text>
          </View>
        ))}
    </ScrollView>
  );
};

export default UserMovements;
