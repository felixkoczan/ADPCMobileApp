import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Switch, Button, Alert, StyleSheet, Modal } from 'react-native';
import ThemeContext from '../ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const [selectedDevice, setSelectedDevice] = useState(null);
const [isModalVisible, setIsModalVisible] = useState(false);



const mockConsentData = [
  {
    deviceID: '4568',
    deviceName: 'Camera_Entryway',
    consents: [
      { id: '1', name: 'Motion Tracking', granted: true },
      { id: '2', name: 'Location Tracking', granted: false },
    ],
  },
  {
    deviceID: '5687',
    deviceName: 'WU_WiFi',
    consents: [
      { id: '3', name: 'Data Usage', granted: true },
      { id: '4', name: 'Location Tracking', granted: false },
    ],
  },
  {
    deviceID: '8987',
    deviceName: 'WU_Lightsensor',
    consents: [
      { id: '5', name: 'Data Usage', granted: false },
      { id: '6', name: 'Motion Tracking', granted: false },
    ],
  },
];

const ConsentRequestScreen = () => {
    const [consentData, setConsentData] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        // Here you would fetch consent requests from your backend
        setConsentData(mockConsentData);
    }, []);

    const toggleConsent = async (deviceID, consentId, value) => {
        const updatedData = consentData.map(device => {
            if (device.deviceID === deviceID) {
                return {
                    ...device,
                    consents: device.consents.map(consent => {
                        if (consent.id === consentId) {
                            return { ...consent, granted: value };
                        }
                        return consent;
                    }),
                };
            }
            return device;
        });
        setConsentData(updatedData);
    
        try {
            await AsyncStorage.setItem('registeredDevices', JSON.stringify(updatedData));
        } catch (e) {
            console.error('Error saving consent updates', e);
        }
    };
    

    const deleteAllConsents = () => {
        const updatedData = consentData.map(device => ({
            ...device,
            consents: device.consents.map(consent => ({
                ...consent,
                granted: false
            })),
        }));
        setConsentData(updatedData);
    };

    const confirmDeleteAll = () => {
        Alert.alert(
            "Delete All Consents",
            "Are you sure you want to delete all given consents?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: deleteAllConsents }
            ]
        );
    };

    const { theme } = useContext(ThemeContext);


    const handleDeviceSelect = (device) => {
        setSelectedDevice(device);
        setIsModalVisible(true);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.title, { color: theme.textColor }]}>Consent Requests</Text>
            <FlatList
                data={consentData}
                keyExtractor={(item) => item.deviceID}
                renderItem={({ item: device }) => (
                    <View>
                        <TouchableOpacity onPress={() => handleDeviceSelect(device)}>
                            <Text style={[styles.deviceTitle, { color: theme.textColor }]}>
                                {device.deviceName}
                            </Text>
                        </TouchableOpacity>
                        {device.consents.map((consent, index) => (
                            <View style={styles.itemContainer} key={index}>
                                <Text style={[styles.itemText, { color: theme.textColor }]}>
                                    {consent.name}
                                </Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={consent.granted ? "#f5dd4b" : "#f4f3f4"}
                                    onValueChange={(newValue) => toggleConsent(device.deviceID, consent.id, newValue)}
                                    value={consent.granted}
                                />
                            </View>
                        ))}
                    </View>
                )}
            />
            <Button
                title="Delete All Consents"
                onPress={confirmDeleteAll}
                color="#FF6347"
            />
        </View>
    );
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    deviceTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    itemText: {
        fontSize: 16,
    },
});

export default ConsentRequestScreen;
