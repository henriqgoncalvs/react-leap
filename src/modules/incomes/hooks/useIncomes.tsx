import { useQuery } from 'react-query';

import { getIncomes } from '../api';

import { QueryConfig } from '@/lib/react-query';

type UseIncomesOptions = {
  config?: QueryConfig<typeof getIncomes>;
};

export const useIncomes = ({ config }: UseIncomesOptions) => {
  return useQuery('incomes', getIncomes, config);
};
