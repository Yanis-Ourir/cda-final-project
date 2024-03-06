import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  GluestackUIProvider,
  LinearGradient,
  Image,
  Center,
  VStack,
  Heading,
} from '@gluestack-ui/themed';

import FormInput from './components/FormInput.tsx';
import {config} from '@gluestack-ui/config';
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Example />
    </GluestackUIProvider>
  );
}

const Example = () => {
  // @ts-ignore
  return (
    <SafeAreaView style={[styles.container]}>
      <LinearGradient
        p="$16"
        colors={['#c31432', '#240b36']}
        start={{x: 0, y: 0}}
        end={{x: 0.7, y: 1}}
        as={RNLinearGradient}
      />

      <Center>
        <Image
          size="xl"
          borderRadius="$full"
          alt="Logo"
          source={{
            uri: 'https://img.freepik.com/premium-vector/sphere-logo-yin-yang-circle-emblem-energy-protection-shield-finance-app-game-branding_177517-1561.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709683200&semt=ais',
          }}
        />
      </Center>

      <Center>
        <VStack>
          <Heading size={'2xl'} style={[styles.title]}>
            Connexion
          </Heading>
          <FormInput
            label={'Adresse mail :'}
            helper={null}
            type={'email'}
            error={"Votre email n'est pas correcte"}
          />
          <FormInput
            label={'Mot de passe'}
            helper={'6 caractères minimum'}
            type={'password'}
            error={"Votre mots de passe n'est pas correcte"}
          />
        </VStack>
      </Center>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#11131F',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
  textInput: {
    color: 'white',
  },
});
