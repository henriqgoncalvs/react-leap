import { Box, Switch as CSwitch, SwitchProps as CSwitchProps } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { FieldProps } from 'formik';

export interface SwitchProps extends Omit<CSwitchProps, 'form'>, Omit<FieldProps, 'form'> {}

export const Switch = ({ field, meta, ...restProps }: SwitchProps) => {
  const { name } = field;
  const { error, touched } = meta;

  return (
    <Box
      css={css`
        .chakra-form__label {
          margin-bottom: 0;
        }
        .chakra-switch {
          display: flex;
          align-items: center;
          margin-right: 0.75rem;
        }
        .chakra-form__error-message {
          margin-top: 0;
        }
      `}
    >
      <CSwitch
        {...field}
        id={name}
        isInvalid={!!error && touched}
        isChecked={field.value}
        {...restProps}
      />
    </Box>
  );
};

export default Switch;
