import {
  HStack,
  PinInput as CPinInput,
  PinInputField,
  PinInputProps as CPinInputProps,
  StackProps,
} from '@chakra-ui/react';
import { FieldProps } from 'formik';

export interface PinInputProps extends Omit<CPinInputProps, 'children'>, FieldProps {
  pinAmount?: number;
  stackProps?: StackProps;
}

export const PinInput = ({
  field,
  form,
  pinAmount = 4,
  stackProps,
  ...restProps
}: PinInputProps) => {
  const { name } = field;
  const { setFieldValue } = form;

  const renderedPinInputFields = [...Array(pinAmount)].map((_noop, i) => <PinInputField key={i} />);

  const $setFieldValue = (value: string) => setFieldValue(name, value);

  return (
    <HStack {...stackProps}>
      <CPinInput {...field} onChange={$setFieldValue} {...restProps}>
        {renderedPinInputFields}
      </CPinInput>
    </HStack>
  );
};

export default PinInput;
