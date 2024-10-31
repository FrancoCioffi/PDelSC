// Share.tsx
import React from 'react';
import { View, Button, Share, Alert } from 'react-native';

const ShareScreen = () => {
  const shareApp = async () => {
    try {
      const result = await Share.share({
        message: '¡Descarga esta increíble aplicación!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          Alert.alert('Compartido con éxito.');
        }
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo compartir la app.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Compartir App" onPress={shareApp} />
    </View>
  );
};

export default ShareScreen;
