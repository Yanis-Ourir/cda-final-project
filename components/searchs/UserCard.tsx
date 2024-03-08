import React from 'react';
import {
  View,
  Text,
  Box,
  Heading,
  FlatList,
  HStack,
  Avatar,
  AvatarImage,
  VStack,
} from '@gluestack-ui/themed';

const data = [
  {
    id: '1',
    fullName: 'John Doe',
    recentText: 'in Freeze (created by DelayedFreeze)',
    timeStamp: '1h',
    avatarUrl:
      'https://img.freepik.com/premium-vector/sphere-logo-yin-yang-circle-emblem-energy-protection-shield-finance-app-game-branding_177517-1561.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709683200&semt=ais',
  },
  {
    id: '2',
    fullName: 'Jane Doe',
    recentText: 'in Freeze (created by DelayedFreeze)',
    timeStamp: '1h',
    avatarUrl:
      'https://img.freepik.com/premium-vector/sphere-logo-yin-yang-circle-emblem-energy-protection-shield-finance-app-game-branding_177517-1561.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709683200&semt=ais',
  },
  {
    id: '3',
    fullName: 'John Doe',
    recentText: 'in Freeze (created by DelayedFreeze)',
    timeStamp: '1h',
    avatarUrl:
      'https://img.freepik.com/premium-vector/sphere-logo-yin-yang-circle-emblem-energy-protection-shield-finance-app-game-branding_177517-1561.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709683200&semt=ais',
  },
  {
    id: '4',
    fullName: 'Jane Doe',
    recentText: 'in Freeze (created by DelayedFreeze)',
    timeStamp: '1h',
    avatarUrl:
      'https://img.freepik.com/premium-vector/sphere-logo-yin-yang-circle-emblem-energy-protection-shield-finance-app-game-branding_177517-1561.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709683200&semt=ais',
  },
  {
    id: '5',
    fullName: 'John Doe',
    recentText: 'in Freeze (created by DelayedFreeze)',
    timeStamp: '1h',
    avatarUrl:
      'https://img.freepik.com/premium-vector/sphere-logo-yin-yang-circle-emblem-energy-protection-shield-finance-app-game-branding_177517-1561.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709683200&semt=ais',
  },
];

export default function UserCard() {
  return (
    <Box py="$10">
      <Heading size="xl" p="$4" pb="$3">
        Inbox
      </Heading>
      <FlatList
        data={data}
        renderItem={({item}: any) => (
          <Box
            borderBottomWidth="$1"
            borderColor="$trueGray800"
            $dark-borderColor="$trueGray100"
            $base-pl={0}
            $base-pr={0}
            $sm-pl="$4"
            $sm-pr="$5"
            py="$2">
            <HStack space="md" justifyContent="space-between">
              <Avatar size="md">
                <AvatarImage
                  source={{uri: item.avatarUrl}}
                  alt={item.fullName}
                />
              </Avatar>
              <VStack>
                <Text
                  color="$coolGray800"
                  fontWeight="$bold"
                  $dark-color="$warmGray100">
                  {item.fullName}
                </Text>
                <Text color="$coolGray600" $dark-color="$warmGray200">
                  {item.recentText}
                </Text>
              </VStack>
              <Text
                fontSize="$xs"
                color="$coolGray800"
                alignSelf="flex-start"
                $dark-color="$warmGray100">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}
