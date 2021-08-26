import {
  RadioGroup as CRadioGroup,
  RadioGroupProps as CRadioGroupProps,
  Stack,
  StackProps,
} from '@chakra-ui/react';
import { FieldProps } from 'formik';

export interface RadioGroupProps extends CRadioGroupProps, FieldProps {
  inline?: boolean;
  stackProps?: StackProps;
  children: React.ReactNode;
}

export const RadioGroup = ({
  field,
  form,
  stackProps,
  inline = false,
  children,
  ...restProps
}: RadioGroupProps) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  const $setFieldValue = (value: string) => {
    setFieldValue(name, value);
  };

  return (
    <CRadioGroup {...field} value={value} onChange={$setFieldValue} {...restProps}>
      <Stack direction={inline ? 'row' : 'column'} {...stackProps}>
        {children}
      </Stack>
    </CRadioGroup>
  );
};

export default RadioGroup;
export { Radio } from '@chakra-ui/react';
