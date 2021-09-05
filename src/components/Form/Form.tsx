import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { Form as FormikForm, Formik, FormikConfig, FormikProps } from 'formik';

import FormikDebug from './FormikDebug';

type FormProps<TFormValues> = FormikConfig<TFormValues> & {
  children: (props: FormikProps<TFormValues>) => React.ReactNode;
  withDebugger?: boolean;
};

export const Form = <TFormValues extends Record<string, unknown> = Record<string, unknown>>({
  children,
  withDebugger = false,
  ...restProps
}: FormProps<TFormValues>) => {
  const { isOpen: isDebuggerOpen, onToggle: onDebuggerToggle } = useDisclosure();

  return (
    <Formik {...restProps}>
      {(props) => (
        <Box w="100%">
          <FormikForm style={{ width: '100%' }}>{children(props)}</FormikForm>
          {withDebugger && (
            <>
              <Button
                ml="auto"
                d="block"
                onClick={onDebuggerToggle}
                w="100%"
                mx="auto"
                mt={5}
                variant="@secondary"
              >
                {isDebuggerOpen ? 'Fechar debugger' : 'Abrir debugger'}
              </Button>
              <FormikDebug isOpen={isDebuggerOpen} onToggle={onDebuggerToggle} />
            </>
          )}
        </Box>
      )}
    </Formik>
  );
};
