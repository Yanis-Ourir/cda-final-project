// BoxComponent.js
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

export default function FormInput(props: {
  label: string;
  helper: string | null;
  error: string | null;
  type: string;
}) {
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
            {props.label}
          </FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField type={props.type} style={[styles.textInput]} />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>{props.helper}</FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>{props.error}</FormControlErrorText>
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
