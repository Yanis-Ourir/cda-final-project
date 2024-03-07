import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View} from '@gluestack-ui/themed';

interface NavigationIconProps {
  name: string;
  size: number;
  color: string;
}

export default function NavigationIcon({
  IconProps,
}: {
  IconProps: NavigationIconProps;
}) {
  return (
    <View>
      <Icon
        name={IconProps.name}
        size={IconProps.size}
        color={IconProps.color}
      />
    </View>
  );
}
