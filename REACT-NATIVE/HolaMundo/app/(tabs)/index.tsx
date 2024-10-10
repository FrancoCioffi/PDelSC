import { Image, StyleSheet, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.contenedor}>
      <ThemedText>
        Hola Mundo!
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#000',
    color: '#FFF',
    textAlign: 'center',  
    paddingHorizontal: 10,
    borderRadius: 8,  
  },
});

