import { useQuery } from 'react-query';

import { getExpenses } from '../api';

import { QueryConfig } from '@/lib/react-query';

type UseExpensesOptions = {
  config?: QueryConfig<typeof getExpenses>;
};

export const useExpenses = ({ config }: UseExpensesOptions) => {
  return useQuery('expenses', getExpenses, config);
};
