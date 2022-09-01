import {
  Input,
  InputGroup,
  InputProps,
} from '@chakra-ui/react';
import { FieldProps } from 'formik';
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
  placeholder,
  onChange,
  field,
  meta,
  form,
  ...restProps
}: TextInputMaskProps) => {
  const { name, value } = field;
  const { setFieldValue } = form;

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
