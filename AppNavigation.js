import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DeviceRegistrationScreen from './DeviceRegistrationScreen'; // Adjust path as needed
import HomeScreen from './HomeScreen'; // Create this screen or adjust the path
import SettingsScreen from './SettingsScreen'; // Create this screen or adjust the path
import ConsentRequestScreen from './ConsentRequestScreen';

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ drawerLabel: 'Home' }}
                />
                <Drawer.Screen 
                    name="ConsentRequestScreen" 
                    component={ConsentRequestScreen} 
                    options={{ drawerLabel: 'Manage Consents' }}
                />
                <Drawer.Screen 
                    name="DeviceRegistration" 
                    component={DeviceRegistrationScreen} 
                    options={{ drawerLabel: 'Register Device' }}
                />
                <Drawer.Screen 
                    name="Settings" 
                    component={SettingsScreen} 
                    options={{ drawerLabel: 'Settings' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
