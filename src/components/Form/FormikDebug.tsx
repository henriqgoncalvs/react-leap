import { Box, IconButton, Portal, Slide, useOutsideClick } from '@chakra-ui/react';
import { Field } from 'formik';
import { useRef } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

export const isDevelopmentMode = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

type FormikDebugProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const FormikDebug = ({ isOpen, onToggle }: FormikDebugProps) => {
  const debuggerRef = useRef(null);

  useOutsideClick({
    ref: debuggerRef,
    handler: () => {
      if (isOpen) onToggle();
    },
  });

  return isDevelopmentMode() ? (
    <Portal>
      <Slide
        ref={debuggerRef}
        direction="bottom"
        in={isOpen}
        style={{ maxWidth: 'fit-content', zIndex: 100000 }}
      >
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="brand.500"
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
};
export default FormikDebug;
