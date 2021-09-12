import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  SlideFade,
  FormControlProps,
  Text,
  Box,
  Icon,
} from '@chakra-ui/react';
import { FiAlertCircle } from 'react-icons/fi';

export interface FormGroupProps
  extends Omit<FormControlProps, 'onChange' | 'defaultValue' | 'label'> {
  children?: React.ReactNode;
  error?: string;
  helper?: React.ReactNode;
  id?: string;
  required?: boolean;
  label?: React.ReactNode;
  showError?: boolean;
}

export const FormGroup = ({
  children,
  error,
  helper,
  id,
  required,
  label,
  ...props
}: FormGroupProps) => (
  <FormControl isInvalid={!!error} isRequired={required} {...props}>
    {!!label && <FormLabel htmlFor={id}>{label}</FormLabel>}
    {children}
    {!!helper && <FormHelperText>{helper}</FormHelperText>}

    {error && (
      <FormErrorMessage>
        <SlideFade in offsetY={-6}>
          <Box d="flex">
            <Icon as={FiAlertCircle} />
            <Text ml={2}>{error}</Text>
          </Box>
        </SlideFade>
      </FormErrorMessage>
    )}
  </FormControl>
);
