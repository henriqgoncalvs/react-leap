import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as CNumberInput,
  NumberInputField,
  NumberInputProps as CNumberInputProps,
  NumberInputStepper,
} from '@chakra-ui/react';
import { FieldProps } from 'formik';

export interface NumberInputProps extends CNumberInputProps, FieldProps {
  showStepper?: boolean;
  children?: React.ReactNode;
}

export const NumberInput = ({
  field,
  form,
  meta,
  showStepper = true,
  children,
  ...restProps
}: NumberInputProps) => {
  const { name } = field;
  const { setFieldValue } = form;
  const { touched, error } = meta;

  const $setFieldValue = (value: any) => setFieldValue(name, value);

  return (
    <CNumberInput
      {...field}
      id={name}
      onChange={(value) => $setFieldValue(value)}
      isInvalid={!!error && touched}
      {...restProps}
    >
      <NumberInputField name={name} />
      {showStepper && (
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      )}
      {children}
    </CNumberInput>
  );
};

export default NumberInput;
