import { useQuery } from 'react-query';

import { getIncomes } from '../api';

import { QueryConfig } from '@/lib/react-query';

type UseIncomesOptions = {
  config?: QueryConfig<typeof getIncomes>;
  queryKey?: any;
};

export const useIncomes = ({ config, queryKey }: UseIncomesOptions) => {
  return useQuery(['incomes', queryKey], () => getIncomes({ queryKey }), config);
};
