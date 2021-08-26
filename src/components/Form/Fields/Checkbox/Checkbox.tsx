import {
  CheckboxGroup as CCheckboxGroup,
  Checkbox as CCheckbox,
  CheckboxGroupProps as CCheckboxGroupProps,
  Stack,
} from '@chakra-ui/react';
import { FieldProps } from 'formik';

interface Option {
  value: string;
  label?: React.ReactNode;
}

export interface CheckboxProps extends CCheckboxGroupProps, FieldProps {
  size?: 'sm' | 'md' | 'lg';
  inline?: boolean;
  options?: Option[];
}

export const Checkbox = ({
  field,
  form,
  options = [],
  size = 'md',
  inline = false,
  ...restProps
}: CheckboxProps) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  const $setFieldValue = (value: any[]) => {
    setFieldValue(name, value);
  };

  return (
    <CCheckboxGroup size={size} value={value || []} onChange={$setFieldValue} {...restProps}>
      <Stack direction={inline ? 'row' : 'column'} spacing="4">
        {options.map((option) => (
          <CCheckbox key={option.value} value={option.value} colorScheme="brand">
            {option.label ?? option.value}
          </CCheckbox>
        ))}
      </Stack>
    </CCheckboxGroup>
  );
};

export default Checkbox;
