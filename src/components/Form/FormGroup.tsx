import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  SlideFade,
  FormControlProps,
} from '@chakra-ui/react';
import { FiAlertCircle } from 'react-icons/fi';

import { Icon } from '@/components/common/Icon';

export interface FormGroupProps
  extends Omit<FormControlProps, 'onChange' | 'defaultValue' | 'label'> {
  children?: React.ReactNode;
  error?: string;
  helper?: React.ReactNode;
  id?: string;
  isRequired?: boolean;
  label?: React.ReactNode;
  showError?: boolean;
}

export const FormGroup = ({
  children,
  error,
  helper,
  id,
  isRequired,
  label,
  ...props
}: FormGroupProps) => (
  <FormControl isInvalid={!!error} isRequired={isRequired} {...props}>
    {!!label && <FormLabel htmlFor={id}>{label}</FormLabel>}
    {children}
    {!!helper && <FormHelperText>{helper}</FormHelperText>}

    {error && (
      <FormErrorMessage>
        <SlideFade in offsetY={-6}>
          <Icon icon={FiAlertCircle} me="2" />
          {error}
        </SlideFade>
      </FormErrorMessage>
    )}
  </FormControl>
);
