import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen.tsx';
import SearchScreen from '../screens/SearchScreen.tsx';
import ProfileScreen from '../screens/ProfileScreen.tsx';
import React from 'react';
import LoginScreen from '../screens/LoginScreen.tsx';
import {View} from '@gluestack-ui/themed';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#11131F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#B54548',
        tabBarStyle: {
          backgroundColor: '#171923',
        },
      }}>
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Chercher" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
}
