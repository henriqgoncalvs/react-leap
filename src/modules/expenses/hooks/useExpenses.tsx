import { useQuery } from 'react-query';

import { getExpenses } from '../api';

import { QueryConfig } from '@/lib/react-query';

type UseExpensesOptions = {
  config?: QueryConfig<typeof getExpenses>;
  take?: number;
  skip: number;
};

export const useExpenses = ({ config, take = 10, skip }: UseExpensesOptions) => {
  return useQuery('expenses', () => getExpenses({ take, skip }), config as any);
};
