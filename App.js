import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

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
                value={deviceName}
                onChangeText={setDeviceName}
            />

            <TextInput
                style={styles.input}
                placeholder="Device Type"
                value={deviceType}
                onChangeText={setDeviceType}
            />

            <TextInput
                style={styles.input}
                placeholder="Serial Number"
                value={serialNumber}
                onChangeText={setSerialNumber}
            />

            <Button
                title="Register Device"
                onPress={handleRegistration}
            />
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
});

export default DeviceRegistrationScreen;
