import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const DeviceRegistrationScreen = () => {
    const [deviceName, setDeviceName] = useState('');
    const [deviceType, setDeviceType] = useState('');
    const [serialNumber, setSerialNumber] = useState('');

    const handleRegistration = () => {
        // Basic validation
        if (!deviceName || !deviceType || !serialNumber) {
            Alert.alert("Error", "Please fill all the fields");
            return;
        }

        // Implement the registration logic here
        console.log('Device Registered:', { deviceName, deviceType, serialNumber });

        // Show a success message
        Alert.alert("Success", "Device registered successfully");

        // Reset the form fields
        setDeviceName('');
        setDeviceType('');
        setSerialNumber('');

        // Additional logic to navigate to another screen or further processing can be added here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register IoT Device</Text>

            <TextInput
                style={styles.input}
                placeholder="Device Name"
                placeholderTextColor="#A0A0A0"
                value={deviceName}
                onChangeText={setDeviceName}
            />

            <TextInput
                style={styles.input}
                placeholder="Device Type"
                placeholderTextColor="#A0A0A0"
                value={deviceType}
                onChangeText={setDeviceType}
            />

            <TextInput
                style={styles.input}
                placeholder="Serial Number"
                placeholderTextColor="#A0A0A0"
                value={serialNumber}
                onChangeText={setSerialNumber}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Register Device</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        marginBottom: 20,
        color: '#333',
        backgroundColor: '#FFF',
    },
    button: {
        width: '100%',
        backgroundColor: '#407BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default DeviceRegistrationScreen;