import React from 'react';

import {
  Center,
  VStack,
  View,
  Text,
  HStack,
  ScrollView,
} from '@gluestack-ui/themed';
import FormInput from '../forms/FormInput.tsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GameCard from '../games/GameCard.tsx';

const data = [
  {
    id: 1,
    title: 'GTA V',
    description: 'Jeu de tir à la première personne',
    tags: ['Action', 'Aventure'],
    image:
      'https://m.media-amazon.com/images/I/91T0XQv8gEL._AC_UF1000,1000_QL80_.jpg',
    releaseDate: '2013',
    communityNote: '9.8',
  },
  {
    id: 2,
    title: 'Minecraft',
    description: 'Jeu de construction',
    tags: ['Aventure', 'Construction'],
    image:
      'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png',
    releaseDate: '2011',
    communityNote: '9.2',
  },
  {
    id: 3,
    title: 'The Witcher 3',
    description: 'Jeu de rôle',
    tags: ['Aventure', 'RPG'],
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png',
    releaseDate: '2015',
    communityNote: '9.1',
  },
  {
    id: 4,
    title: 'The Witcher 3',
    description: 'Jeu de rôle',
    tags: ['Aventure', 'RPG'],
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png',
    releaseDate: '2015',
    communityNote: '9.1',
  },
  {
    id: 5,
    title: 'The Witcher 3',
    description: 'Jeu de rôle',
    tags: ['Aventure', 'RPG'],
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png',
    releaseDate: '2015',
    communityNote: '9.1',
  },
  {
    id: 6,
    title: 'The Witcher 3',
    description: 'Jeu de rôle',
    tags: ['Aventure', 'RPG'],
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png',
    releaseDate: '2015',
    communityNote: '9.1',
  },
];

export default function SearchScreen() {
  return (
    <ScrollView backgroundColor="#171923" height={'100%'}>
      <Center>
        <VStack>
          <HStack>
            <Text px="$5" py="$2" color="white" fontSize="$lg">
              Jeux
            </Text>
            <Text px="$5" py="$2" color="white" fontSize="$lg">
              Utilisateurs
            </Text>
            <Text px="$5" py="$2" color="white" fontSize="$lg">
              Listes
            </Text>
          </HStack>
          <HStack alignItems="center">
            <FormInput
              inputProps={{
                error: "Cette liste n'existe pas",
                type: 'email',
                placeholder: 'Rechercher une liste',
                boxWidth: '$64',
                boxHeight: '$14',
              }}
            />
            <Icon name="more-horiz" size={40} color="gray" />
          </HStack>
        </VStack>
      </Center>
      {data.map(game => {
        return <GameCard gameCardsProps={game} key={game.id} />;
      })}
    </ScrollView>
  );
}
