import React from 'react';

import {HStack, Image, Text, VStack} from '@gluestack-ui/themed';

type GameCardProps = {
  title: string;
  description: string;
  tags: Array<string>;
  image: any;
  releaseDate: string;
  communityNote: string;
};

export default function GameCard({
  gameCardsProps,
}: {
  gameCardsProps: GameCardProps;
}) {
  return (
    <HStack px="$5" w="$96" py="$2">
      <Image
        size="lg"
        w="$20"
        alt="Cover game image list"
        source={{
          uri: gameCardsProps.image,
        }}
      />
      <HStack alignItems="center">
        <VStack px="$5">
          <Text fontSize="$lg" fontWeight="bold" color="white">
            {gameCardsProps.title}
          </Text>
          <Text fontSize="$sm" color="gray" w="$64">
            {gameCardsProps.description}
          </Text>
          <Text fontSize="$md" color="white">
            {gameCardsProps.tags.join(', ')}
          </Text>
          <Text fontSize="$sm" color="gray">
            Date de sortie : {gameCardsProps.releaseDate}
          </Text>
        </VStack>
        <Text fontSize="$xl" color="#C31432" marginRight={14}>
          {gameCardsProps.communityNote}
        </Text>
      </HStack>
    </HStack>
  );
}
