import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DeviceDetailsScreen = ({ route, navigation }) => {
  const { device } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Details</Text>

      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Name:</Text>
        <Text style={styles.detailValue}>{device.name || 'N/A'}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>ID:</Text>
        <Text style={styles.detailValue}>{device.id}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>RSSI:</Text>
        <Text style={styles.detailValue}>{device.rssi || 'N/A'}</Text>
      </View>

      {/* Additional device details can be added here */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailTitle: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  detailValue: {
    flex: 1, // To ensure text does not overflow
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DeviceDetailsScreen;
