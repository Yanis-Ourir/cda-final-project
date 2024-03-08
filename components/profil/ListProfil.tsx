import React from 'react';
import {LinearGradient, View} from '@gluestack-ui/themed';
import ListCard from './ListCard.tsx';
import {LinearGradient as RNLinearGradient} from 'react-native-linear-gradient';

export default function ListProfil() {
  return (
    <LinearGradient
      p="$8"
      colors={['#611623', '#240B36']}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 0.8}}
      borderRadius={20}
      w="$96"
      as={RNLinearGradient}>
      <View>
        <ListCard
          listCardProps={{
            title: 'Explorations Fantastiques',
            description:
              'Je pars à la découverte de mondes extraordinaires et mystérieux où chaque recoin cache des secrets à dévoiler.',
            numberOfGames: 10,
            image: 'https://i.ytimg.com/vi/i1CmZPc4gjQ/maxresdefault.jpg',
          }}
        />
        <ListCard
          listCardProps={{
            title: 'Aventures Épiques',
            description:
              'Dans cette liste, je découvre des récits épiques, des mondes fantastiques et des héros inoubliables qui ...',
            numberOfGames: 10,
            image:
              'https://s3.us-east-2.amazonaws.com/gmag.io-live-us/games/logos/10250_64648035a1d9f.png',
          }}
        />
        <ListCard
          listCardProps={{
            title: 'Classiques Incontournables',
            description:
              'Je retrouve mes jeux préférés qui ont marqué ma vie de joueur, dans cette liste de classiques intemporels.',
            numberOfGames: 10,
            image:
              'https://m.media-amazon.com/images/I/71kjzEEBsUL._AC_UF1000,1000_QL80_.jpg',
          }}
        />
        <ListCard
          listCardProps={{
            title: 'Classiques Incontournables',
            description:
              'Je retrouve mes jeux préférés qui ont marqué ma vie de joueur, dans cette liste de classiques intemporels.',
            numberOfGames: 10,
            image:
              'https://m.media-amazon.com/images/I/71kjzEEBsUL._AC_UF1000,1000_QL80_.jpg',
          }}
        />
      </View>
    </LinearGradient>
  );
}
