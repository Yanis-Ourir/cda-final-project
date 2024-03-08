import React from 'react';

import {HStack, Image, Text, VStack} from '@gluestack-ui/themed';

type ListCardProps = {
  title: string;
  description: string;
  numberOfGames: number;
  image: any;
};

export default function ListCard({
  listCardProps,
}: {
  listCardProps: ListCardProps;
}) {
  return (
    <HStack w="$96" pb="$3">
      <Image
        size="lg"
        w="$20"
        alt="Cover game image list"
        source={{
          uri: listCardProps.image,
        }}
      />

      <VStack px="$5">
        <Text fontSize="$lg" fontWeight="bold" color="white">
          {listCardProps.title}
        </Text>
        <Text fontSize="$sm" color="gray" w="$64">
          {listCardProps.description}
        </Text>
        <Text fontSize="$md" color="white">
          Nombre de jeux : {listCardProps.numberOfGames}
        </Text>
      </VStack>
    </HStack>
  );
}
