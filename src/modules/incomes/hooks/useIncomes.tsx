import { useQuery } from 'react-query';

import { QueryConfig } from '@/lib/react-query';

import { getIncomes } from '../api';

type UseIncomesOptions = {
  config?: QueryConfig<typeof getIncomes>;
  take?: number;
  skip?: number;
};

export const useIncomes = ({ config, take = 10, skip = 0 }: UseIncomesOptions) => {
  return useQuery('incomes', () => getIncomes({ take, skip }), config as any);
};
