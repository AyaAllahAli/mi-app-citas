import { useState } from 'react';
import { router } from 'expo-router';
import { View, Text, StyleSheet, Pressable, TextInput, Alert } from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState('');

  const handleBooking = () => {
    if (!name.trim()) {
      Alert.alert('Falta tu nombre', 'Escribe tu nombre para continuar');
      return;
    }
    router.push({
    pathname: '/booking',
    params: { name },
  });
    //router.push('/booking');
    //Alert.alert('Perfecto', `Hola ${name}, vamos a reservar tu cita`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi primera app de citas</Text>
      <Text style={styles.subtitle}>
        Reserva tu cita de barbería o peluquería de forma fácil
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
      />

      <Pressable style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Reservar cita</Text>
      </Pressable>
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
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#0f766e',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});