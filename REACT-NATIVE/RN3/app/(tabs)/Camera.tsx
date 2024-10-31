import React, { useState, useEffect } from 'react';
import { View, Button, Text, Image } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      setPhoto(photo.uri);
    }
  };

  if (hasPermission === null) {
    return <Text>Solicitando permisos para la cámara...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Permisos para la cámara denegados.</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} ref={(ref) => setCameraRef(ref)} />
      <Button title="Tomar Foto" onPress={takePicture} />
      {photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default CameraScreen;
  