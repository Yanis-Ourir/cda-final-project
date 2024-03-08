import {
  AlertCircleIcon,
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from '@gluestack-ui/themed';
import React from 'react';

type InputProps = {
  boxWidth?: any;
  boxHeight?: any;
  label?: string;
  helper?: string;
  error?: string;
  type: any;
  placeholder?: any;
};

export default function FormInput({inputProps}: {inputProps: InputProps}) {
  return (
    <Box
      h={inputProps.boxHeight ? inputProps.boxHeight : '$32'}
      w={inputProps.boxWidth ? inputProps.boxWidth : '$72'}>
      <FormControl
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        isRequired={false}>
        <FormControlLabel mb="$1">
          <FormControlLabelText color="white">
            {inputProps.label}
          </FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type={inputProps.type}
            color="white"
            placeholder={inputProps.placeholder}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>{inputProps.helper}</FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>{inputProps.error}</FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>
  );
}
