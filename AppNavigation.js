import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DeviceRegistrationScreen from './Screens/DeviceRegistrationScreen'; // Adjust path as needed
import HomeScreen from './Screens/HomeScreen'; // Create this screen or adjust the path
import SettingsScreen from './Screens/SettingsScreen'; // Create this screen or adjust the path
import ConsentRequestScreen from './Screens/ConsentRequestScreen';
import AboutScreen from './Screens/AboutScreen';

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ drawerLabel: 'Home' }}
            />
            <Drawer.Screen 
                name="Consent Requests" 
                component={ConsentRequestScreen} 
                options={{ drawerLabel: 'Manage Consents' }}
            />
            <Drawer.Screen 
                name="Device Registration" 
                component={DeviceRegistrationScreen} 
                options={{ drawerLabel: 'Register Device' }}
            />
            <Drawer.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{ drawerLabel: 'Settings' }}
            />
            <Drawer.Screen 
                name="About" 
                component={AboutScreen} 
                options={{ drawerLabel: 'About' }}
            />
        </Drawer.Navigator>
    );
};

export default AppNavigation;
