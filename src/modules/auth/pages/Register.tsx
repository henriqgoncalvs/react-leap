import { useToast } from '@chakra-ui/react';

import { AuthLayout } from '../components/AuthLayout';
import { RegisterForm } from '../components/RegisterForm';

export const Register = () => {
  const toast = useToast();

  return (
    <AuthLayout title="Create an account">
      <RegisterForm
        onSuccess={() =>
          toast({
            title: 'Account successfully createad.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        }
      />
    </AuthLayout>
  );
};
