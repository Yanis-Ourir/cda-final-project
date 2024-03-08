import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup,
  AddIcon,
} from '@gluestack-ui/themed';

import React from 'react';

type ButtonProps = {
  label: string;
  size: any;
  action: any;
  isDisabled: boolean;
  isFocusVisible: boolean;
  addIcon: string | null;
  buttonColor: string;
};

export default function CustomButton({
  ButtonProps,
}: {
  ButtonProps: ButtonProps;
}) {
  return (
    <Button
      size={ButtonProps.size}
      action={ButtonProps.action}
      isDisabled={ButtonProps.isDisabled}
      isFocusVisible={ButtonProps.isFocusVisible}
      backgroundColor={ButtonProps.buttonColor}
      width={300}
      borderRadius={100}>
      <ButtonText>{ButtonProps.label}</ButtonText>
      {ButtonProps.addIcon && <ButtonIcon as={ButtonProps.addIcon} />}
    </Button>
  );
}
