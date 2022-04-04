import { useQuery } from 'react-query';

import { QueryConfig } from '@/lib/react-query';

import { getExpenses } from '../api';

type UseExpensesOptions = {
  config?: QueryConfig<typeof getExpenses>;
};

export const useExpenses = ({ config }: UseExpensesOptions) => {
  return useQuery('expenses', getExpenses, config);
};
