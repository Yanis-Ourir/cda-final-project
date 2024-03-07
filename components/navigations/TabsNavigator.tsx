import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen.tsx';
import SearchScreen from '../screens/SearchScreen.tsx';
import ProfileScreen from '../screens/ProfileScreen.tsx';
import React from 'react';
import LoginScreen from '../screens/LoginScreen.tsx';
import NavigationIcon from './NavigationIcon.tsx';

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
          backgroundColor: '#11131F',
        },
      }}>
      <Tab.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              IconProps={{
                name: 'home',
                size: 35,
                color: focused ? '#B54548' : '#fff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chercher"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              IconProps={{
                name: 'search',
                size: 35,
                color: focused ? '#B54548' : '#fff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              IconProps={{
                name: 'person',
                size: 35,
                color: focused ? '#B54548' : '#fff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <NavigationIcon
              IconProps={{
                name: 'mail',
                size: 35,
                color: focused ? '#B54548' : '#fff',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
