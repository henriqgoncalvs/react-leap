import { useToast } from '@chakra-ui/react';
import { useMutation } from 'react-query';

import { createAgency } from '../api';
import { CreateAgencyOptions } from '../api/types';
import { Agency } from '../types';

import { MutationConfig, queryClient } from '@/lib/react-query';

type UseCreateAgencyOptions = {
  config?: MutationConfig<typeof createAgency>;
  onClose?: () => void;
};

export const useCreateAgency = ({ onClose, config }: UseCreateAgencyOptions) => {
  const toast = useToast();

  return useMutation({
    onMutate: async (newAgency: CreateAgencyOptions) => {
      await queryClient.cancelQueries('agencies');

      const previousAgencies = queryClient.getQueryData<Agency[]>('agencies');

      queryClient.setQueryData('agencies', [
        ...(previousAgencies || []),
        { ...newAgency.data, createdAt: Date.now() },
      ]);

      return { previousAgencies };
    },
    onError: (_, __, context: any) => {
      if (context?.previousAgencies) {
        queryClient.setQueryData('agencies', context.previousAgencies);
        toast({
          title: 'Error on creating an agency.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('agencies');
      if (onClose) onClose();
      toast({
        title: 'Agency created.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    },
    ...config,
    mutationFn: createAgency,
  });
};
