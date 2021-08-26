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

export interface TextInputProps extends Omit<InputProps, 'form'>, FieldProps {
  size?: 'sm' | 'md' | 'lg';
}

export const TextInput = ({
  size = 'md',
  type = 'text',
  placeholder,
  field,
  meta,
  form,
  ...restProps
}: TextInputProps) => {
  const { name, value } = field;
  const { touched } = meta;
  const { isValidating, isSubmitting, setFieldValue } = form;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup size={size}>
      <Input
        {...field}
        type={showPassword ? 'text' : type || 'text'}
        placeholder={placeholder ? String(placeholder) : ''}
        value={value}
        onChange={(e) => setFieldValue(name, e.target.value)}
        {...restProps}
      />

      {type === 'password' && (
        <InputLeftElement>
          <IconButton
            onClick={() => setShowPassword((x) => !x)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            display="flex"
            size="xs"
            fontSize="lg"
            icon={showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
            variant="unstyled"
          />
        </InputLeftElement>
      )}

      {(touched || isSubmitting) && isValidating && (
        <InputRightElement>
          <Spinner size="sm" flex="none" />
        </InputRightElement>
      )}
    </InputGroup>
  );
};
