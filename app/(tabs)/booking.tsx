import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { router } from 'expo-router';

export default function BookingScreen() {
    const handleSelectService = (service: string) => {
       Alert.alert('Servicio seleccionado', `Has elegido: ${service}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elige tu servicio</Text>

      <Pressable style={styles.card} onPress={() => handleSelectService('Corte de pelo')}>
        <Text style={styles.cardTitle}>Corte de pelo</Text>
        <Text style={styles.cardText}>30 min</Text>
      </Pressable>

      <Pressable style={styles.card} onPress={() => handleSelectService('Barba')}>
        <Text style={styles.cardTitle}>Barba</Text>
        <Text style={styles.cardText}>20 min</Text>
      </Pressable>

      <Pressable style={styles.card} onPress={() => handleSelectService('Corte + barba')}>
        <Text style={styles.cardTitle}>Corte + barba</Text>
        <Text style={styles.cardText}>45 min</Text>
      </Pressable>
    </View>
  );

//   const goToConfirmation = (service: string) => {
//     router.push({
//       pathname: '/confirm-booking',
//       params: { service },
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Elige tu servicio</Text>

//       <Pressable style={styles.card} onPress={() => goToConfirmation('Corte de pelo')}>
//         <Text style={styles.cardTitle}>Corte de pelo</Text>
//         <Text style={styles.cardText}>30 min</Text>
//       </Pressable>

//       <Pressable style={styles.card} onPress={() => goToConfirmation('Barba')}>
//         <Text style={styles.cardTitle}>Barba</Text>
//         <Text style={styles.cardText}>20 min</Text>
//       </Pressable>

//       <Pressable style={styles.card} onPress={() => goToConfirmation('Corte + barba')}>
//         <Text style={styles.cardTitle}>Corte + barba</Text>
//         <Text style={styles.cardText}>45 min</Text>
//       </Pressable>
//     </View>
//   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f1ea',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: '#6b7280',
  },
});