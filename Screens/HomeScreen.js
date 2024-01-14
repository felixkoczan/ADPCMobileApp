import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Logo from '../assets/ADPC_Logo_high.png';
import ThemeContext from '../ThemeContext';

const HomeScreen = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);

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
});

export default HomeScreen;
