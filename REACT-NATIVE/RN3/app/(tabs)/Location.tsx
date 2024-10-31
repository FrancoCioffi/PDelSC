import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';

const LocationScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permiso para acceder a la ubicación fue denegado.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Esperando...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitud: ${location.coords.latitude}, Longitud: ${location.coords.longitude}`;
  }

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default LocationScreen;
