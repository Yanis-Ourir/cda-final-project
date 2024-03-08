import React from 'react';

import {
  LinearGradient,
  Image,
  Center,
  VStack,
  HStack,
  Heading,
  SafeAreaView,
  ScrollView,
  Text,
} from '@gluestack-ui/themed';
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient';
import FormInput from '../forms/FormInput.tsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListProfil from '../profil/ListProfil.tsx';

export default function ProfileScreen() {
  return (
    <SafeAreaView backgroundColor="#171923" height="100%">
      <ScrollView>
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
            position="absolute"
            alt="Logo"
            source={{
              uri: 'https://img.freepik.com/premium-vector/sphere-logo-yin-yang-circle-emblem-energy-protection-shield-finance-app-game-branding_177517-1561.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709683200&semt=ais',
            }}
          />
        </Center>
        <VStack>
          <Heading
            size={'2xl'}
            fontWeight="bold"
            color="white"
            mt="$16"
            textAlign="center">
            John Doe
          </Heading>
          <Text px="$5" py="$2" color="gray" fontSize="$sm">
            in Freeze (created by DelayedFreeze) in DelayedFreeze (created by
            InnerScreen) in InnerScreen (created by Screen) in Screen (created
            by MaybeScreen) in MaybeScreen (created by BottomTabView)
          </Text>
          <Center>
            <HStack>
              <Text px="$5" py="$2" color="white" fontSize="$lg">
                Listes
              </Text>
              <Text px="$5" py="$2" color="white" fontSize="$lg">
                Évaluations
              </Text>
              <Text px="$5" py="$2" color="white" fontSize="$lg">
                Favoris
              </Text>
              <Text px="$5" py="$2" color="white" fontSize="$lg">
                Stats
              </Text>
            </HStack>
            <HStack alignItems="center">
              <FormInput
                inputProps={{
                  error: "Cette liste n'existe pas",
                  type: 'email',
                  placeholder: 'Rechercher une liste',
                  boxWidth: '$56',
                  boxHeight: '$14',
                }}
              />
              <Icon name="more-horiz" size={40} color="gray" />
            </HStack>
            <ListProfil />
          </Center>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
