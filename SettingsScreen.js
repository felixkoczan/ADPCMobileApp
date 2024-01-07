import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    // Example settings state
    const [setting1, setSetting1] = React.useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.setting}>
                <Text style={styles.settingText}>Dark Mode</Text>
                <Switch
                    value={setting1}
                    onValueChange={setSetting1}
                />
            </View>
            {/* Add more settings here */}
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingBottom: 10,
    },
    settingText: {
        fontSize: 16,
    },
});

export default SettingsScreen;
