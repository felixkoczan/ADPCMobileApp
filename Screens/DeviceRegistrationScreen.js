import React, { useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeContext from '../ThemeContext';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  StyleSheet,
} from 'react-native';

const CombinedScreen = ({ navigation }) => {
  const [macAddress, setMacAddress] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  const { theme } = useContext(ThemeContext);

  const addDevice = async () => {
    if (!macAddress || !deviceName || !deviceType || !serialNumber) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
  
    try {
      // Create a new device object
      const newDevice = { macAddress, deviceName, deviceType, serialNumber };
  
      // Retrieve the current list of devices
      const storedDevices = await AsyncStorage.getItem('registeredDevices');
      const currentDevices = storedDevices ? JSON.parse(storedDevices) : [];
  
      // Add the new device to the list
      currentDevices.push(newDevice);
  
      // Save the updated list back to AsyncStorage
      await AsyncStorage.setItem('registeredDevices', JSON.stringify(currentDevices));
  
      // Confirmation message
      ToastAndroid.show('Device added!', ToastAndroid.SHORT);
    } catch (e) {
      // Error saving data
      Alert.alert('Error', 'Failed to save the device');
    }
  
    // Reset the form fields and navigate
    setMacAddress('');
    setDeviceName('');
    setDeviceType('');
    setSerialNumber('');
    navigation.navigate('Home');
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <TextInput
        style={[styles.input, { color: theme.textColor, backgroundColor: theme.inputBackgroundColor }]}
        placeholder="MAC Address"
        placeholderTextColor={theme.placeholderTextColor}
        value={macAddress}
        onChangeText={setMacAddress}
      />

      <TextInput
        style={[styles.input, { color: theme.textColor, backgroundColor: theme.inputBackgroundColor }]}
        placeholder="Device Name"
        placeholderTextColor={theme.placeholderTextColor}
        value={deviceName}
        onChangeText={setDeviceName}
      />

      <TextInput
        style={[styles.input, { color: theme.textColor, backgroundColor: theme.inputBackgroundColor }]}
        placeholder="Device Type"
        placeholderTextColor={theme.placeholderTextColor}
        value={deviceType}
        onChangeText={setDeviceType}
      />

      <TextInput
        style={[styles.input, { color: theme.textColor, backgroundColor: theme.inputBackgroundColor }]}
        placeholder="Serial Number"
        placeholderTextColor={theme.placeholderTextColor}
        value={serialNumber}
        onChangeText={setSerialNumber}
      />

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonColor }]} onPress={addDevice}>
        <Text style={[styles.buttonText, { color: theme.buttonTextColor }]}>Add Device</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CombinedScreen;
