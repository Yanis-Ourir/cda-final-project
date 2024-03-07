import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  GluestackUIProvider,
  Image,
  Center,
  VStack,
  Heading,
  Text,
} from '@gluestack-ui/themed';

import {config} from '@gluestack-ui/config';

import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './components/navigations/TabsNavigator.tsx';

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <SafeAreaView style={[styles.container]}>
          <TabsNavigator />
        </SafeAreaView>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#11131F',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput: {
    color: 'white',
  },
});
