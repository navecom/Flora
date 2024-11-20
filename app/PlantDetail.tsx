import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

interface Plant {
  id: number;
  name: string;
  image: any;
  locimage: string;
}

const popularPlants: Plant[] = [
  { id: 1, name: 'Peperomia Houseplant', image: require('@/assets/images/peperomia.jpg') },
  { id: 2, name: 'Asplenium Houseplant', image: require('@/assets/images/asplenium.jpg') },
  { id: 3, name: 'Aglaonema Houseplant', image: require('@/assets/images/aglaonema.jpg') },
  { id: 4, name: 'Monstera Houseplant', image: require('@/assets/images/monstera.jpg') },
  { id: 5, name: 'Alocasia Houseplant', image: require('@/assets/images/alocasia.jpg') },
  { id: 6, name: 'Homalomena Houseplant', image: require('@/assets/images/homalomena.jpg') },
  { id: 7, name: 'Calathea Houseplant', image: require('@/assets/images/calathea.jpg') },
  { id: 8, name: 'Philodendron Houseplant', image: require('@/assets/images/philodendron.jpg') },
  { id: 9, name: 'Rosemary Houseplant', image: require('@/assets/images/rosemary.jpg') },
  { id: 10, name: 'Jenggot Musa Houseplant', image: require('@/assets/images/jenggot musa.jpg') },
  { id: 11, name: 'Pilea Houseplant', image: require('@/assets/images/pilea.jpg') },
  { id: 12, name: 'Hoya Houseplant', image: require('@/assets/images/hoya.jpg') },
  { id: 13, name: 'Oxalis Houseplant', image: require('@/assets/images/oxalis.jpg') },
  { id: 14, name: 'Sanseviera Houseplant', image: require('@/assets/images/sanseviera.jpg') },
  { id: 15, name: 'Pothos Houseplant', image: require('@/assets/images/pothos.jpg') },
  { id: 16, name: 'Bambu Hoki Houseplant', image: require('@/assets/images/bambu hoki.jpg') },
  { id: 17, name: 'Dracaena Trifasciata Houseplant', image: require('@/assets/images/dracaena trifasciata.jpg') },
  { id: 18, name: 'Bunny Ear Cactus Houseplant', image: require('@/assets/images/bunny ear cactus.jpg') },
  { id: 19, name: 'Lidah Buaya Houseplant', image: require('@/assets/images/lidah buaya.jpg') },
  { id: 20, name: 'Fishbone Cactus Houseplant', image: require('@/assets/images/fishbone cactus.jpg') },
];

const plantDescriptions = {
  1: "Peperomia Houseplant adalah genus tanaman hias yang sangat populer, terutama untuk tanaman dalam ruangan, karena ukurannya yang kecil, perawatan yang mudah, dan daunnya yang menarik. Tanaman ini termasuk dalam keluarga Piperaceae dan berasal dari daerah tropis di Amerika Tengah dan Selatan. Ada lebih dari 1.000 spesies Peperomia, yang sebagian besar tumbuh sebagai tanaman sukulen atau tanaman semak kecil. Peperomia cenderung menyukai tanah yang sedikit kering antara penyiraman. Tanah harus memiliki drainase yang baik untuk mencegah akar tergenang air. Siram ketika lapisan atas tanah terasa kering.",
  2: "Asplenium Houseplant, atau biasa disebut dengan 'Asparagus Fern', adalah tanaman hias yang populer karena bentuk daunnya yang elegan dan tampak seperti semak hutan tropis. Meskipun sering disamakan dengan tanaman pakis, Asplenium sebenarnya bukan bagian dari keluarga pakis, melainkan dari keluarga Aspleniaceae. Tanaman ini sering digunakan sebagai tanaman hias indoor karena kemampuannya untuk bertahan di berbagai kondisi ruangan. Tanaman ini membutuhkan tanah yang lembap tetapi tidak tergenang air. Penyiraman harus dilakukan secara teratur, tetapi pastikan tanah tidak tergenang. Sebaiknya biarkan lapisan atas tanah sedikit kering sebelum disiram lagi.",
  3: "Aglaonema Houseplant adalah tanaman dengan daun berwarna cerah yang sangat mudah dirawat. Tanaman ini tidak memerlukan banyak cahaya matahari langsung dan cukup disiram setiap 1-2 minggu. Aglaonema lebih menyukai cahaya terang yang tidak langsung. Namun, tanaman ini juga dapat tumbuh baik di tempat dengan cahaya redup, menjadikannya pilihan yang baik untuk ruangan dengan pencahayaan terbatas. Jika ditempatkan di bawah cahaya matahari langsung, daunnya bisa terbakar. Tanaman ini membutuhkan tanah yang lembap tetapi tidak tergenang air. Siram Aglaonema ketika lapisan atas tanah terasa kering. Hindari menyiram terlalu banyak atau membiarkan tanaman tergenang air, karena akar bisa membusuk.",
  4: "Monstera Houseplant genus tanaman hias tropis yang sangat populer karena daun-daunnya yang unik dan dekoratif. Tanaman ini berasal dari daerah tropis di Amerika Tengah dan Selatan. Salah satu spesies yang paling terkenal adalah Monstera deliciosa, yang sering disebut juga sebagai Swiss Cheese Plant karena daunnya yang besar, berlubang, atau bercelah. Monstera mengandung kalsium oksalat yang beracun jika dikonsumsi oleh manusia atau hewan peliharaan. Pastikan untuk menjauhkannya dari jangkauan anak-anak dan hewan. ika akar udara tumbuh terlalu panjang, kamu bisa memangkasnya atau membimbingnya ke arah tiang lumut.",
  5: "Alocasia Houseplant genus tanaman hias tropis yang dikenal karena daunnya yang besar, dramatis, dan berbentuk unik. Tanaman ini berasal dari Asia Tenggara dan merupakan bagian dari keluarga Araceae. Alocasia sering disebut sebagai Elephant Ear Plant karena daunnya yang besar menyerupai telinga gajah. Dengan penampilannya yang eksotis, Alocasia sangat populer sebagai tanaman dekoratif, baik di dalam ruangan maupun di taman tropis. Siram secara teratur untuk menjaga tanah tetap lembap, tetapi jangan sampai tergenang. Tanah yang terlalu basah dapat menyebabkan akar membusuk. Biarkan lapisan atas tanah sedikit mengering sebelum penyiraman berikutnya.",
  6: "Homalomena Houseplant tanaman hias tropis dari keluarga Araceae, terkenal karena keindahan daunnya yang lebar, mengkilap, dan sering kali berbentuk hati. Tanaman ini berasal dari Asia Tenggara dan Amerika Selatan, dan sering disebut sebagai Queen of Hearts atau Shield Plant. Homalomena adalah pilihan populer untuk tanaman indoor karena tampilannya yang elegan dan kemampuannya bertahan di lingkungan dengan perawatan minim. Siram tanaman secara teratur, tetapi biarkan lapisan atas tanah mengering sebelum penyiraman berikutnya. Hindari tanah yang terlalu basah karena dapat menyebabkan akar membusuk.",
  7: "Calathea Houseplant adalah genus tanaman hias yang terkenal dengan daunnya yang indah dan berwarna-warni. Tanaman ini termasuk dalam keluarga Marantaceae dan sering disebut juga sebagai prayer plants karena daunnya yang bisa bergerak naik turun tergantung pada waktu hari. Beberapa spesies Calathea memiliki pola daun yang sangat menarik, dengan garis-garis, corak, dan warna yang kontras, membuatnya sangat populer sebagai tanaman hias indoor. Tanaman ini membutuhkan tanah yang lembap, namun jangan sampai tergenang air. Siram tanaman secara teratur, tetapi pastikan pot memiliki drainase yang baik. Memberi pupuk cair setiap dua minggu sekali selama musim pertumbuhan akan membantu tanaman tumbuh lebih subur.",
  8: "Philodendron Houseplant adalah genus tanaman tropis dari keluarga Araceae yang sangat populer sebagai tanaman hias, baik untuk indoor maupun outdoor. Tanaman ini dikenal dengan keindahan daun-daunnya yang unik, perawatannya yang mudah, dan kemampuannya menyesuaikan diri dengan berbagai kondisi lingkungan. Nama Philodendron berasal dari bahasa Yunani, philo (cinta) dan dendron (pohon), yang berarti pohon yang dicintai, mengacu pada sifatnya yang suka memanjat pohon di habitat aslinya. Siram secara teratur, tetapi biarkan tanah bagian atas mengering sebelum menyiram lagi. Hindari genangan air karena dapat menyebabkan akar membusuk.",
  9: "Rosemary Houseplant adalah (Salvia rosmarinus) adalah tanaman herbal aromatik yang berasal dari daerah Mediterania. Tanaman ini terkenal karena daunnya yang menyerupai jarum dengan aroma khas yang segar, sering digunakan sebagai bumbu masakan, bahan aromaterapi, hingga pengobatan tradisional. Rosemary merupakan tanaman serbaguna yang dapat ditanam di dalam pot maupun di taman, baik sebagai tanaman hias, rempah, maupun tanaman obat. Siram secara teratur tetapi jangan sampai tanah terlalu basah. Biarkan tanah mengering di antara penyiraman.",
  10: "Jenggot Musa Houseplant adalah atau dikenal juga sebagai Spanish Moss (Tillandsia usneoides), adalah tanaman epifit yang unik dari keluarga Bromeliaceae. Tanaman ini tumbuh dengan menjuntai seperti jaring atau rambut halus, sering terlihat menggantung dari cabang-cabang pohon di daerah tropis dan subtropis. Meskipun namanya mengandung kata moss (lumut), tanaman ini bukan lumut melainkan kerabat dekat dari nanas. Dengan penampilannya yang eksotis dan kemampuannya untuk tumbuh tanpa tanah, tanaman ini cocok untuk dekorasi kreatif baik di dalam maupun luar ruangan. Namun, memastikan kelembapan yang cukup dan sirkulasi udara yang baik adalah kunci untuk menjaga tanaman ini tetap sehat.",
  11: "Pilea Houseplant adalah sering dikenal sebagai Chinese Money Plant atau Friendship Plant, adalah genus tanaman dari keluarga Urticaceae. Salah satu spesies paling terkenal adalah Pilea peperomioides, yang sering dihargai sebagai tanaman hias indoor karena bentuknya yang menarik dan perawatannya yang mudah. Dengan daun yang bulat, berdaging, dan sering kali mengkilap, tanaman ini memberikan tampilan modern dan cocok untuk dekorasi rumah. Siram tanaman saat lapisan atas tanah mulai mengering. Hindari overwatering untuk mencegah akar membusuk.",
  12: "Hoya Houseplant atau dikenal sebagai tanaman lilin (wax plant), adalah genus tanaman dari keluarga Apocynaceae. Tanaman ini populer sebagai tanaman hias indoor karena daunnya yang tebal dan mengilap seperti lilin, serta bunganya yang indah, wangi, dan sering kali tampak seperti porselen. Hoya adalah tanaman epifit yang tumbuh di daerah tropis, menjadikannya tahan terhadap berbagai kondisi lingkungan. Siram tanaman saat lapisan atas tanah mulai kering. Jangan terlalu sering menyiram karena akar Hoya sensitif terhadap genangan air.",
  13: "Oxalis Houseplant adalah genus tanaman berbunga yang berasal dari keluarga Oxalidaceae. Tanaman ini dikenal karena daunnya yang unik, berbentuk seperti hati atau tiga daun, dan bunga kecil yang berwarna cerah. Beberapa spesies Oxalis juga dikenal dengan nama populer shamrock atau wood sorrel. Oxalis dapat ditemukan di berbagai habitat, mulai dari hutan tropis hingga daerah beriklim sedang, dan beberapa jenisnya sering digunakan sebagai tanaman hias, baik di dalam maupun di luar ruangan. Oxalis membutuhkan penyiraman secara teratur, tetapi pastikan tanah tidak tergenang air. Biarkan tanah mengering sedikit di antara penyiraman.",
  14: "Sanseviera Houseplant yang juga dikenal dengan nama Lidah Mertua atau Snake Plant, adalah tanaman hias yang sangat populer karena kemudahan perawatannya dan kemampuannya untuk bertahan dalam berbagai kondisi. Tanaman ini termasuk dalam keluarga Asparagaceae dan berasal dari Afrika Barat Laut dan Asia. Tanaman ini memerlukan perawatan minimal. Cukup siram secukupnya, terutama jika tanah sudah kering. Pastikan juga pot memiliki saluran drainase yang baik untuk mencegah akar membusuk.",
  15: "Pothos Houseplant (Epipremnum aureum) adalah salah satu tanaman hias populer yang mudah dirawat, tahan lama, dan memiliki daya tarik estetika tinggi. Pothos juga dikenal dengan nama Devil’s Ivy atau Golden Pothos. Tanaman ini berasal dari kawasan tropis di Asia Tenggara, seperti Indonesia, Filipina, dan Malaysia. Pothos memiliki daun berbentuk hati yang khas dan dapat tumbuh merambat atau menjuntai, sehingga sering digunakan sebagai tanaman gantung atau tanaman penutup tanah. anaman ini tidak membutuhkan banyak air. Biarkan tanah sedikit mengering di antara penyiraman. Terlalu sering menyiram dapat menyebabkan akar membusuk. Pothos lebih toleran terhadap kekeringan dibandingkan kelembapan berlebih.",
  16: "Bambu Hoki Houseplant adalah tanaman hias yang populer dalam feng shui, dipercaya membawa keberuntungan, kesejahteraan, dan energi positif bagi pemiliknya. Tanaman ini sering disebut juga dengan Lucky Bamboo, meskipun sebenarnya bukan jenis bambu sejati (bambu termasuk dalam keluarga Poaceae, sedangkan bambu hoki termasuk dalam keluarga Asparagaceae). Bambu hoki berasal dari Afrika tropis, tetapi kini banyak dibudidayakan di berbagai negara, termasuk di Asia dan Amerika, terutama sebagai tanaman hias di dalam ruangan.  Dalam praktik feng shui, bambu hoki dipercaya membawa energi positif, keberuntungan, dan kemakmuran bagi pemiliknya. Biasanya, semakin banyak batang bambu yang digunakan, semakin besar energi positif yang dibawa.",
  17: "Dracaena Trifasciata Houseplant adalah salah satu jenis tanaman hias yang sangat populer dan mudah perawatannya. Tanaman ini terkenal karena kemampuannya untuk tumbuh di berbagai kondisi lingkungan dan tahan terhadap kekeringan. Sansevieria trifasciata memiliki daun yang tegak, panjang, dan berbentuk seperti pedang, serta memiliki pola yang menarik, menjadikannya pilihan populer untuk dekorasi dalam ruangan. Tanaman ini sangat tahan terhadap kekeringan dan memerlukan sedikit penyiraman. Siram tanaman hanya ketika tanahnya benar-benar kering, karena terlalu banyak air dapat menyebabkan akar membusuk. Pada musim dingin, penyiraman bisa lebih jarang.",
  18: "Bunny Ear Cactus Houseplant adalah Tanaman ini sangat tahan terhadap kekeringan dan memerlukan sedikit penyiraman. Siram tanaman hanya ketika tanahnya benar-benar kering, karena terlalu banyak air dapat menyebabkan akar membusuk. Pada musim dingin, penyiraman bisa lebih jarang. Seperti kebanyakan kaktus, tanaman ini sangat tahan terhadap kekeringan dan memerlukan sedikit penyiraman. Siram tanaman hanya ketika tanah benar-benar kering. Di musim dingin, cukup siram sekali setiap beberapa minggu untuk mencegah akar membusuk. Pastikan pot memiliki drainase yang baik agar air tidak menggenang di dalam pot.",
  19: "Lidah Buaya Houseplant adalah  salah satu tanaman sukulen yang paling dikenal dan banyak digunakan, baik dalam dunia kesehatan, kecantikan, maupun sebagai tanaman hias. Tanaman ini memiliki daun tebal yang mengandung gel bening, yang kaya akan manfaat, serta mudah dirawat dan tumbuh baik dalam kondisi panas dan kering. Lidah buaya banyak ditemukan di daerah tropis dan subtropis di seluruh dunia. Seperti tanaman sukulen lainnya, lidah buaya sangat tahan terhadap kekeringan dan memerlukan sedikit air. Siram tanaman hanya ketika tanahnya benar-benar kering. Di musim panas, penyiraman bisa lebih sering, namun di musim dingin penyiraman harus dikurangi",
  20: "Fishbone Cactus adalah tanaman kaktus sukulen yang berasal dari daerah tropis Amerika Tengah dan Meksiko. Tanaman ini memiliki penampilan yang sangat unik, dengan batang yang bercabang dan berbentuk zig-zag, mirip dengan tulang ikan atau sirip ikan, sehingga memberikan kesan eksotis. Fishbone cactus sangat populer sebagai tanaman hias karena bentuknya yang menarik dan kemudahan perawatannya. Tanaman ini lebih suka suhu hangat antara 20-30°C dan tidak tahan terhadap suhu dingin. Suhu di bawah 10°C dapat merusak tanaman. Oleh karena itu, jika Anda tinggal di daerah dengan cuaca dingin, pastikan Fishbone cactus diletakkan di dalam ruangan yang hangat.",
  // Tambahkan deskripsi untuk tanaman lainnya...
};

const PlantDetail = () => {
  const route = useRoute();
  const { plantId } = route.params; // Mengambil ID yang dikirim dari HomeScreen

  // Cari tanaman berdasarkan ID
  const plant = popularPlants.find((p) => p.id === plantId);
  const description = plant ? plantDescriptions[plantId] : null;

  if (!plant) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Tanaman tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={plant.image} style={styles.image} />
      <Text style={styles.name}>{plant.name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.footer}>Selamat merawat tanaman Anda! 🌱</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 8,
  },
  footer: {
    fontSize: 14,
    marginTop: 16,
    fontStyle: 'italic',
    color: '#2D3748',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default PlantDetail;
