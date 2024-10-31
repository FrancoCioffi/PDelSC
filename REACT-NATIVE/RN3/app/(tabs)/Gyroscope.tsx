import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';

const GyroscopeScreen = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    const subscription = Gyroscope.addListener((data) => {
      setData({
        x: data.x,
        y: data.y,
        z: data.z,
      });
    });

    // Limpiar el listener al desmontar el componente
    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <View>
      <Text>Giroscopio:</Text>
      <Text>x: {data.x?.toFixed(2)}</Text>
      <Text>y: {data.y?.toFixed(2)}</Text>
      <Text>z: {data.z?.toFixed(2)}</Text>
    </View>
  );
};

export default GyroscopeScreen;
