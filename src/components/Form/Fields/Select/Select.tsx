import { Select as CSelect, SelectProps as CSelectProps } from '@chakra-ui/react';
import { FieldProps } from 'formik';

interface Option {
  value: any;
  label?: React.ReactNode;
}

export interface SelectProps extends Omit<CSelectProps, 'form'>, FieldProps {
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  options?: Option[];
  noOptionsMessage?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
}

export const Select = ({
  placeholder,
  size = 'md',
  options = [],
  noOptionsMessage,
  isClearable = false,
  isSearchable = false,
  field,
  form,
  ...restProps
}: SelectProps) => {
  const { name } = field;
  const { setFieldValue } = form;

  const $setFieldValue = (value: any) => {
    setFieldValue(name, value);
  };

  return (
    <CSelect
      {...field}
      {...restProps}
      onChange={(e) => $setFieldValue(e.target.value)}
      id={name}
      placeholder={placeholder || 'Select...'}
      size={size}
      options={options}
      noOptionsMessage={noOptionsMessage || 'No option'}
      isClearable={isClearable}
      isSearchable={isSearchable}
    >
      {options.map(({ value, label }: Option) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </CSelect>
  );
};

export default Select;
