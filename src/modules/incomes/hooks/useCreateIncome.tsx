import { useToast } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useMutation } from 'react-query';

import { MutationConfig, queryClient } from '@/lib/react-query';

import { createIncome } from '../api';
import { CreateIncomeOptions } from '../api/types';
import { Income } from '../types';

type UseCreateIncomeOptions = {
  config?: MutationConfig<typeof createIncome>;
  onClose?: () => void;
};

export const useCreateIncome = ({ onClose, config }: UseCreateIncomeOptions) => {
  const toast = useToast();

  return useMutation({
    onMutate: async (newIncome: CreateIncomeOptions) => {
      await queryClient.cancelQueries('incomes');

      const previousIncomes = queryClient.getQueryData<Income[]>('incomes');

      queryClient.setQueryData('incomes', [
        ...(previousIncomes || []),
        {
          ...newIncome.data,
          date: dayjs(newIncome.data.date).toISOString(),
          createdAt: dayjs().toISOString(),
        },
      ]);

      if (onClose) onClose();

      return { previousIncomes };
    },
    onError: (_, __, context: any) => {
      if (context?.previousIncomes) {
        queryClient.setQueryData('incomes', context.previousIncomes);
        toast({
          title: 'Error on creating an income.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('incomes');
      toast({
        title: 'Income created.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    },
    ...config,
    mutationFn: createIncome,
  });
};
