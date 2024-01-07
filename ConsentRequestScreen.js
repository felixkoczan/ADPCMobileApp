import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Switch, StyleSheet } from 'react-native';

// Mock data for consent requests
const mockConsentRequests = [
    { id: '1', name: 'Marketing Emails', granted: true },
    { id: '2', name: 'Location Tracking', granted: false },
    { id: '3', name: 'Usage Data', granted: true },
    // Add more consent requests as needed
];

const ConsentRequestScreen = () => {
    const [consentRequests, setConsentRequests] = useState([]);

    useEffect(() => {
        // Here you would fetch consent requests from your backend
        setConsentRequests(mockConsentRequests);
    }, []);

    const toggleConsent = (id, value) => {
        // Implement logic to update the consent (usually involves a backend call)
        // For now, we'll just update the state
        const updatedRequests = consentRequests.map(request => {
            if (request.id === id) {
                return { ...request, granted: value };
            }
            return request;
        });
        setConsentRequests(updatedRequests);

        // Implement additional logic after updating consent (e.g., feedback to user)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Consent Requests</Text>
            <FlatList
                data={consentRequests}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={item.granted ? "#f5dd4b" : "#f4f3f4"}
                            onValueChange={(newValue) => toggleConsent(item.id, newValue)}
                            value={item.granted}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
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
