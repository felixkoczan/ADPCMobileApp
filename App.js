import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import ConsentRequestScreen from './Screens/ConsentRequestScreen';
import DeviceRegistrationScreen from './Screens/DeviceRegistrationScreen';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ThemeProvider from './ThemeProvider'; // Import the ThemeProvider

const App = () => {
    return ( 
        <NavigationContainer>
            <ThemeProvider>
                <AppNavigation />
            </ThemeProvider>
        </NavigationContainer>
    )
};

export default App;
