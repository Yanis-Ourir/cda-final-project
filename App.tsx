import React from 'react';

import {
  GluestackUIProvider,
  Image,
  Center,
  VStack,
  Heading,
  Text,
  SafeAreaView,
} from '@gluestack-ui/themed';

import {config} from '@gluestack-ui/config';

import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './components/navigations/TabsNavigator.tsx';

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <SafeAreaView height="100%">
          <TabsNavigator />
        </SafeAreaView>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
