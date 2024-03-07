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
import {StyleSheet} from 'react-native';

interface InputProps {
  label: string;
  helper: string | null;
  error: string | null;
  type: any;
}

export default function FormInput({InputProps}: {InputProps: InputProps}) {
  return (
    <Box h="$32" w="$72">
      <FormControl
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        isRequired={false}>
        <FormControlLabel mb="$1">
          <FormControlLabelText style={[styles.textInput]}>
            {InputProps.label}
          </FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField type={InputProps.type} style={[styles.textInput]} />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>{InputProps.helper}</FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>{InputProps.error}</FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>
  );
}

const styles = StyleSheet.create({
  textInput: {
    color: 'white',
  },
});
