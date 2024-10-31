// Biometric.tsx
import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const Biometric = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleBiometricAuth = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      Alert.alert('Error', 'El dispositivo no tiene soporte para autenticación biométrica.');
      return;
    }

    const biometricAvailable = await LocalAuthentication.isEnrolledAsync();
    if (!biometricAvailable) {
      Alert.alert('Error', 'No hay datos biométricos disponibles en el dispositivo.');
      return;
    }

    const result = await LocalAuthentication.authenticateAsync();
    setIsAuthenticated(result.success);

    if (result.success) {
      Alert.alert('Autenticación Exitosa', 'Has sido autenticado correctamente.');
    } else {
      Alert.alert('Error', 'No se pudo autenticar.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Autenticación Biométrica</Text>
      <Button title="Autenticar con Biométrico" onPress={handleBiometricAuth} />
      {isAuthenticated && <Text>Acceso concedido</Text>}
    </View>
  );
};

export default Biometric;
