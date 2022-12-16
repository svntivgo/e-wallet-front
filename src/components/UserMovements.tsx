import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { currencyHook } from '../hooks/currencyHook';
import { dateHook } from '../hooks/dateHook';
import { userMovements as styles } from '../themes/userMovements';

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
            <Image style={styles.foto} source={{ uri: movement.photo }} />
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
