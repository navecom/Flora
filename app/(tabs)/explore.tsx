import { StyleSheet, Image, ScrollView, View, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header Image */}
        <Image
          source={require('../../assets/images/icon.png')} // Menggunakan gambar lokal
          style={styles.headerImage}
          resizeMode="contain"
        />
        
        <ThemedText style={styles.title}>Selamat datang di Aplikasi Saya</ThemedText>

        <ThemedText style={styles.description}>
          Aplikasi ini menyajikan tanaman yang kamu bisa cari dengan mudah dan ditampilkan dengan antarmuka yang friendly.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>Features</ThemedText>
        <ThemedText style={styles.description}>
          - Katalog Tanaman: Menyediakan data tanaman yang dapat dicari oleh pengguna, lengkap dengan gambar dan deskripsi tiap tanaman.{'\n'}
          {'\n'}
          - Filter Tanaman: Pengguna dapat memilih kategori tanaman seperti tanaman hias, dan tanaman obat{'\n'}
          {'\n'}
          - Detail Tanaman: Pengguna dapat melihat detail dari setiap tanaman.{'\n'}
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>Cara Menggunakan Aplikasi Ini</ThemedText>
        <ThemedText style={styles.description}>
        1. Buka aplikasi: Setelah membuka aplikasi, pengguna akan melihat daftar tanaman.{'\n'}
        {'\n'}
        2. Gunakan Filter: Klik gambar yang tertera dihalaman untuk memilih tanaman yang diinginkan.{'\n'}
        {'\n'}
        3. Lihat Detail: Klik pada "Gambar yang sudah ada dihalaman? Klik aja!" untuk melihat detail tanaman secara lengkap.
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : 30, // Adjusts padding for safe areas
    backgroundColor: '#7cfc00', // Background color of the screen
  },
  content: {
    padding: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: 'black',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
  },

});