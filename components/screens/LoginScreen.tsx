import React from 'react';
import {
  LinearGradient,
  Image,
  Center,
  VStack,
  Heading,
  Text,
  View,
} from '@gluestack-ui/themed';
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient';
import FormInput from '../forms/FormInput.tsx';
import CustomButton from '../forms/CustomButton.tsx';

export default function LoginScreen({navigation}: any) {
  return (
    <View backgroundColor="#11131F" height="100%">
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
          borderRadius={100}
          alt="Logo"
          source={{
            uri: 'https://img.freepik.com/premium-vector/sphere-logo-yin-yang-circle-emblem-energy-protection-shield-finance-app-game-branding_177517-1561.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709683200&semt=ais',
          }}
        />
      </Center>

      <Center>
        <VStack>
          <Heading
            size={'2xl'}
            fontWeight="bold"
            color="white"
            mt="$5"
            mb="$10"
            textAlign="center">
            Connexion
          </Heading>
          <FormInput
            InputProps={{
              label: 'Adresse email :',
              helper: null,
              error: "Votre email n'est pas correcte",
              type: 'email',
            }}
          />
          <FormInput
            InputProps={{
              label: 'Mot de passe :',
              helper: null,
              type: 'password',
              error: "Votre mot de passe n'est pas correcte",
            }}
          />
        </VStack>
        <Text>Pas encore de compte ? Inscrivez-vous</Text>

        <CustomButton
          ButtonProps={{
            label: 'Connexion',
            size: 'lg',
            action: () => console.log('Connexion'),
            isDisabled: false,
            isFocusVisible: false,
            addIcon: null,
            buttonColor: '#B54548',
          }}
        />
      </Center>
    </View>
  );
}
