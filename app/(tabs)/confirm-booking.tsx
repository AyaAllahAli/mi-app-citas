import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ConfirmBookingScreen() {
  const { service } = useLocalSearchParams<{ service?: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmar cita</Text>
      <Text style={styles.text}>Has elegido: {service ?? 'Sin servicio'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f1ea',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#374151',
    textAlign: 'center',
  },
});