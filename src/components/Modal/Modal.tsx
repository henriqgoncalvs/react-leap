import {
  Modal as ChakraModal,
  ModalProps as CModalProps,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  UseDisclosureProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type TriggerButtonProps = {
  openModal?: () => void;
};

type ModalProps = {
  title: string;
  triggerButton: ({ openModal }: TriggerButtonProps) => ReactNode;
  children: ({ isOpen, onOpen, onClose }: UseDisclosureProps) => ReactNode;
} & Omit<CModalProps, 'isOpen' | 'onClose'>;

export const Modal = ({ title, triggerButton, children, ...restProps }: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {triggerButton ? triggerButton({ openModal: onOpen }) : null}
      <ChakraModal
        motionPreset="slideInBottom"
        size="lg"
        scrollBehavior="outside"
        isOpen={isOpen}
        onClose={onClose}
        {...restProps}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            position="relative"
            alignItems="center"
            textAlign="center"
            borderBottom="2px"
            borderColor="primary.50"
            py={8}
            fontSize="md"
          >
            {title}
          </ModalHeader>
          <ModalCloseButton left={3} />
          <ModalBody py={8}>{children({ isOpen, onOpen, onClose })}</ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  );
};
