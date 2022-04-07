import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useAuth } from '../authentication';

import AxiosSetup from './axios';

export const InjectAxiosInterceptors = () => {
  const { logout } = useAuth();

  const toast = useToast();

  useEffect(() => {
    AxiosSetup.setupInterceptors(logout, toast);
  }, [logout, toast]);

  return null;
};
