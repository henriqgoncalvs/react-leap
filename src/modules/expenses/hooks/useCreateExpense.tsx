import { useToast } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useMutation } from 'react-query';

import { MutationConfig, queryClient } from '@/lib/react-query';

import { createExpense } from '../api';
import { CreateExpenseOptions } from '../api/types';
import { Expense } from '../types';

type UseCreateExpenseOptions = {
  config?: MutationConfig<typeof createExpense>;
  onClose?: () => void;
};

export const useCreateExpense = ({ onClose, config }: UseCreateExpenseOptions) => {
  const toast = useToast();

  return useMutation({
    onMutate: async (newExpense: CreateExpenseOptions) => {
      await queryClient.cancelQueries('expenses');

      const previousExpenses = queryClient.getQueryData<Expense[]>('expenses');

      queryClient.setQueryData('expenses', [
        ...(previousExpenses || []),
        { ...newExpense.data, createdAt: dayjs().toISOString() },
      ]);

      if (onClose) onClose();

      return { previousExpenses };
    },
    onError: (_, __, context: any) => {
      if (context?.previousExpenses) {
        queryClient.setQueryData('expenses', context.previousExpenses);
        toast({
          title: 'Error on creating a Expense.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('expenses');
      toast({
        title: 'Expense created.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    },
    ...config,
    mutationFn: createExpense,
  });
};
