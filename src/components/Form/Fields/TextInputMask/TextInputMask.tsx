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
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup size={size}>
      <Input
        {...field}
        as={InputMask}
        type={showPassword ? 'text' : type || 'text'}
        placeholder={placeholder ? String(placeholder) : ''}
        value={value}
        onChange={onChange || ((e) => setFieldValue(name, e.target.value))}
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
          <Spinner />
        </InputRightElement>
      )}
    </InputGroup>
  );
};
