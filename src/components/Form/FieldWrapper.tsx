import { Box, BoxProps } from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';

import { FormGroup } from './FormGroup';

export type FieldWrapperProps = {
  name: string;
  as: (props: FieldProps) => React.ReactNode;
  boxProps?: BoxProps;
  required?: boolean;
  label?: string;
  helper?: string;
};

export const FieldWrapper = ({
  name,
  as,
  required = false,
  label,
  helper,
  boxProps,
}: FieldWrapperProps) => {
  const formGroupProps = {
    required,
    label,
    helper,
  };

  return (
    as && (
      <Box {...boxProps} mb="4">
        <Field name={name}>
          {({
            field, // { name, value, onChange, onBlur }
            form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
            meta,
          }) => (
            <FormGroup {...formGroupProps} error={meta.error}>
              {as({ field, form, meta })}
            </FormGroup>
          )}
        </Field>
      </Box>
    )
  );
};
