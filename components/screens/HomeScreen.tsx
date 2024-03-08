import React from 'react';

import {
  LinearGradient,
  Image,
  Center,
  VStack,
  Heading,
  Text,
  SafeAreaView,
  ScrollView,
  View,
} from '@gluestack-ui/themed';
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient';

export default function HomeScreen() {
  return (
    <SafeAreaView backgroundColor="#171923" height="100%">
      <View backgroundColor="" borderRadius={10} h="$4" w="$80">
        <LinearGradient
          p="$16"
          colors={['#c31432', '#240b36']}
          start={{x: 0, y: 0}}
          end={{x: 0.7, y: 1}}
          as={RNLinearGradient}>
          <Text>test</Text>
        </LinearGradient>
      </View>
      <ScrollView horizontal={true}></ScrollView>
    </SafeAreaView>
  );
}
