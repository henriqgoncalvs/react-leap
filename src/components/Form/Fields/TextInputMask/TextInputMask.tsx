import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { FieldProps } from 'formik';
import { useState } from 'react';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import InputMask, { Props as ReactInputMaskProps } from 'react-input-mask';

export interface TextInputMaskProps
  extends Omit<InputProps, 'form'>,
    FieldProps,
    Omit<ReactInputMaskProps, 'form' | 'color' | 'width' | 'height' | 'size'> {
  size?: 'sm' | 'md' | 'lg';
  onChange?: (e: any) => void;
}

export const TextInputMask = ({
  size = 'md',
  type = 'text',
  placeholder,
  onChange,
  field,
  meta,
  form,
  ...restProps
}: TextInputMaskProps) => {
  const { name, value } = field;
  const { touched } = meta;
  const { isValidating, isSubmitting, setFieldValue } = form;

  return (
    <InputGroup size={size}>
      <Input
        {...field}
        as={InputMask}
        placeholder={placeholder ? String(placeholder) : ''}
        value={value}
        onChange={onChange || ((e) => setFieldValue(name, e.target.value))}
        {...restProps}
      />
    </InputGroup>
  );
};
