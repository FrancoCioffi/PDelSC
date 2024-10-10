import { StyleSheet, TouchableOpacity} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  // Función para manejar la pulsación del botón
  const handlePress = () => {
    alert('Alerta');
  };

  return (
    <ThemedView style={styles.contenedor}>
      <TouchableOpacity style={styles.boton} onPress={handlePress}>
        <ThemedText type="title" style={styles.texto}>
          ¡Presióname!
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center', // Centra el botón verticalmente
    alignItems: 'center', // Centra el botón horizontalmente
    backgroundColor: '#FFFFF', // Fondo oscuro
  },
  boton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Fondo blanco para el botón
    width: '50%', // Ocupa el 50% del ancho del contenedor
    height: '15%', // Ocupa el 15% de la altura del contenedor
    borderRadius: 15, // Bordes redondeados para el botón
  },
  texto: {
    color: '#fff', // Texto en negro
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
