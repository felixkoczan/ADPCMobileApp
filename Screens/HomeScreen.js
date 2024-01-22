import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeContext from '../ThemeContext';
import Logo from '../assets/ADPC_Logo_high.png';

const HomeScreen = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);
    const [devices, setDevices] = useState([]);


    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const storedDevices = await AsyncStorage.getItem('registeredDevices');
                const devices = storedDevices ? JSON.parse(storedDevices) : [];
                setDevices(devices);
            } catch (e) {
                console.error('Failed to fetch devices', e);
            }
        };

        fetchDevices();
    }, []);

    const toggleConsent = async (deviceID, consentId) => {
        const updatedDevices = devices.map(device => {
            if (device.deviceID === deviceID) {
                return {
                    ...device,
                    consents: device.consents.map(consent => {
                        if (consent.id === consentId) {
                            return { ...consent, granted: !consent.granted };
                        }
                        return consent;
                    }),
                };
            }
            return device;
        });

        setDevices(updatedDevices);
        await AsyncStorage.setItem('registeredDevices', JSON.stringify(updatedDevices));
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Image source={Logo} style={[styles.logo, { tintColor: theme.textColor }]} />
            <Text style={[styles.title, { color: theme.textColor }]}>Welcome to ADPC-IoT</Text>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.buttonColor }]}
                onPress={() => navigation.navigate('Consent Requests')}>
                <Text style={[styles.buttonText, { color: theme.buttonTextColor }]}>Manage Consents</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.buttonColor }]}
                onPress={() => navigation.navigate('Device Registration')}>
                <Text style={[styles.buttonText, { color: theme.buttonTextColor }]}>Register Device</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.buttonColor }]}
                onPress={() => navigation.navigate('Settings')}>
                <Text style={[styles.buttonText, { color: theme.buttonTextColor }]}>Settings</Text>
            </TouchableOpacity>
            
        </View>    
    );
    return(
        <View style={styles.fullScreen}>
            <FlatList
                data={devicesWithConsent}
                keyExtractor={item => item.deviceID}
                renderItem={({ item }) => (
                    <View style={styles.deviceItem}>
                        <Text style={styles.deviceName}>
                            {item.deviceName}
                            {/* Other consent details */}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
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
    button: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        width: '60%',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo: {
        width: 223,
        height: 100,
    },
    fullScreen: {
        flex: 1, // This ensures the view takes up the full screen
        backgroundColor: 'white', // Or any other background color you prefer
    },
    deviceItem: {
        // Styles for each device item
    },
    deviceName: {
        // Styles for the device name text
    },
    consentItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    consentText: {
        fontSize: 16,
    },
});

export default HomeScreen;
