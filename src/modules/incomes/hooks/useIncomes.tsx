import { useQuery } from 'react-query';

import { QueryConfig } from '@/lib/react-query';

import { getIncomes } from '../api';

type UseIncomesOptions = {
  config?: QueryConfig<typeof getIncomes>;
};

export const useIncomes = ({ config }: UseIncomesOptions) => {
  return useQuery('incomes', getIncomes, config);
};
