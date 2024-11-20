import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { id: 1, name: 'Indoor', icon: '🏡', count: 20 },
  { id: 2, name: 'Outdoor', icon: '🌳', count: 15 },
  { id: 3, name: 'Medicinal', icon: '💊', count: 10 },
  { id: 4, name: 'Backyard', count: 8, icon: '🌳' }
];

const alerts = [
  { id: 1, title: 'Water your plants', description: 'Make sure to water your plants today.', image: require('@/assets/images/cactus.jpg') },
  { id: 2, title: 'Fertilize plants', description: 'Time to fertilize your indoor plants.', image: require('@/assets/images/bamboo.jpg') },
];

const popularPlants = [
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

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

     {/* Header */}
     <View style={styles.header}>
        <Text style={styles.headerTitle}>My Plants</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

    {/* Scan Section */}
    <TouchableOpacity style={styles.scanSection}>
        <Text style={styles.scanText}>Scan and identify the plant</Text>
      </TouchableOpacity>

      {/* Popular Plants */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular plants</Text>
        <FlatList
          data={popularPlants}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.plantCard}
              onPress={() => {
                navigation.navigate('PlantDetail', { plantId: item.id });
              }}
            >
              <Image source={item.image} style={styles.plantImage} />
              <Text style={styles.plantName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categories}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => {
                navigation.navigate('CategoryDetail', {
                  categoryId: category.id,
                  categoryName: category.name,
                  categoryIcon: category.icon,
                  plantCount: category.count,
                });
              }}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryCount}>{category.count} Plants</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Alerts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alerts for today</Text>
        {alerts.map((alert) => (
          <TouchableOpacity
            key={alert.id}
            style={styles.alertCard}
            onPress={() => {
              navigation.navigate('AlertDetail', {
                alertId: alert.id,
                alertTitle: alert.title,
                alertDescription: alert.description,
                alertImage: alert.image,
              });
            }}
          >
            <Image source={alert.image} style={styles.alertImage} />
            <View style={styles.alertTextContainer}>
              <Text style={styles.alertTitle}>{alert.title}</Text>
              <Text style={styles.alertDescription}>{alert.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  scanSection: {
    backgroundColor: '#EAF9EA',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  scanText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C7A1F',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  plantCard: {
    marginRight: 16,
    alignItems: 'center',
  },
  plantImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  plantName: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryCard: {
    width: '30%',
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryName: {
    marginTop: 8,
    fontSize: 14,
  },
  categoryCount: {
    fontSize: 12,
    color: '#6B7280',
  },
  alertCard: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    elevation: 3,
  },
  alertImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  alertTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertDescription: {
    fontSize: 12,
    color: '#6B7280',
  },
});

export default HomeScreen;
