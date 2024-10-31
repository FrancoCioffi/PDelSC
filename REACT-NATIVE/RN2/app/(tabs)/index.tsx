import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId: '',
});
import auth from '@react-native-firebase/auth';

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const signInResult = await GoogleSignin.signIn();

  // Try the new style of google-sign in result, from v13+ of that module
  idToken = signInResult.data?.idToken;
  if (!idToken) {
    // if you are using older versions of google-signin, try old style result
    idToken = signInResult.idToken;
  }
  if (!idToken) {
    throw new Error('No ID token found');
  }

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.token);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
function GoogleSignIn() {
  return (
    <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
  );
}
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Button title="Registrar"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});
