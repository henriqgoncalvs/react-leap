import { useQuery } from 'react-query';

import { getIncomes } from '../api';

import { QueryConfig } from '@/lib/react-query';

type UseIncomesOptions = {
  config?: QueryConfig<typeof getIncomes>;
  take?: number;
  skip?: number;
};

export const useIncomes = ({ config, take = 10, skip = 0 }: UseIncomesOptions) => {
  return useQuery('incomes', () => getIncomes({ take, skip }), config);
};
