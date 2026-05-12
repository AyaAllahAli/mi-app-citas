import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, ScrollView } from 'react-native';

const services = ['Corte de pelo', 'Barba', 'Corte + barba'];
const hours = ['10:00', '11:00', '12:00', '17:00', '18:00'];

export default function BookingScreen() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedHour, setSelectedHour] = useState('');

  const handleConfirm = () => {
    if (!selectedService || !selectedHour) {
      Alert.alert('Faltan datos', 'Selecciona un servicio y una hora');
      return;
    }

    Alert.alert(
      'Cita creada',
      `Servicio: ${selectedService}\nHora: ${selectedHour}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reserva tu cita</Text>

      <Text style={styles.sectionTitle}>1. Elige servicio</Text>
      {services.map((service) => (
        <Pressable
          key={service}
          style={[
            styles.card,
            selectedService === service && styles.selectedCard,
          ]}
          onPress={() => setSelectedService(service)}
        >
          <Text style={styles.cardTitle}>{service}</Text>
        </Pressable>
      ))}

      <Text style={styles.sectionTitle}>2. Elige hora</Text>
      <View style={styles.hoursContainer}>
        {hours.map((hour) => (
          <Pressable
            key={hour}
            style={[
              styles.hourButton,
              selectedHour === hour && styles.selectedHourButton,
            ]}
            onPress={() => setSelectedHour(hour)}
          >
            <Text
              style={[
                styles.hourText,
                selectedHour === hour && styles.selectedHourText,
              ]}
            >
              {hour}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>Resumen</Text>
        <Text style={styles.summaryText}>
          Servicio: {selectedService || 'No seleccionado'}
        </Text>
        <Text style={styles.summaryText}>
          Hora: {selectedHour || 'No seleccionada'}
        </Text>
      </View>

      <Pressable style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirmar cita</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f4f1ea',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
    marginTop: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  selectedCard: {
    borderColor: '#0f766e',
    borderWidth: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  hoursContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  hourButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  selectedHourButton: {
    backgroundColor: '#0f766e',
    borderColor: '#0f766e',
  },
  hourText: {
    color: '#111827',
    fontWeight: '600',
  },
  selectedHourText: {
    color: '#ffffff',
  },
  summaryBox: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 15,
    color: '#4b5563',
    marginBottom: 4,
  },
  confirmButton: {
    backgroundColor: '#0f766e',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});