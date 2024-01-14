import React, { useState, useContext, useEffect, useCallback } from 'react'; 
import { View, Text, Switch, StyleSheet } from 'react-native';
import ThemeContext from '../ThemeContext';

const SettingsScreen = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Use theme.backgroundColor and theme.textColor for styling
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: theme.backgroundColor, // Use theme color
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            color: theme.textColor, // Use theme color
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
            color: theme.textColor, // Use theme color
        },
    });

    const [darkModeSetting, setDarkModeSetting] = useState(false);
    const [deletionSetting, setDeletionSetting] = useState(false);
    const [notificationSetting, setNotificationSetting] = useState(false);

    // Update to use useCallback for a stable function reference
    /*const stableToggleTheme = useCallback(() => {
        if (theme.isDark !== darkModeSetting) {
            toggleTheme();
        }
    }, [darkModeSetting, theme.isDark, toggleTheme]);

    useEffect(() => {
        stableToggleTheme();
    }, [darkModeSetting, stableToggleTheme]);
*/
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.setting}>
                <Text style={styles.settingText}>Dark Mode</Text>
                <Switch
                    value={darkModeSetting}
                    onValueChange={setDarkModeSetting}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={darkModeSetting ? "#f5dd4b" : "#f4f3f4"}
                />
            </View>
            <View style={styles.setting}>
                <Text style={styles.settingText}>Notify me</Text>
                <Switch
                    value={notificationSetting}
                    onValueChange={setNotificationSetting}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={notificationSetting ? "#f5dd4b" : "#f4f3f4"}
                />
            </View>
            <View style={styles.setting}>
                <Text style={styles.settingText}>Delete my Consents</Text>
                <Switch
                    value={deletionSetting}
                    onValueChange={setDeletionSetting}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={deletionSetting ? "#f5dd4b" : "#f4f3f4"}
                />
            </View>
        </View>
    );
};

export default SettingsScreen;
