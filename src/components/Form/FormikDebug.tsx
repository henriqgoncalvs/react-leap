import { Box, IconButton, Portal, Slide } from '@chakra-ui/react';
import { Field } from 'formik';
import { RiCloseCircleLine } from 'react-icons/ri';

export const isDevelopmentMode = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

type FormikDebugProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const FormikDebug = ({ isOpen, onToggle }: FormikDebugProps) =>
  isDevelopmentMode() ? (
    <Portal>
      <Slide direction="bottom" in={isOpen} style={{ maxWidth: 'fit-content', zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
          h="100vh"
          minW="40vw"
          overflowY="scroll"
        >
          <IconButton
            aria-label="Close debugger"
            icon={<RiCloseCircleLine color="#000" style={{ width: '100%' }} />}
            onClick={onToggle}
            float="right"
          />
          <pre>
            <Field>{({ form }: any) => JSON.stringify(form, null, 2)}</Field>
          </pre>
        </Box>
      </Slide>
    </Portal>
  ) : null;

export default FormikDebug;
