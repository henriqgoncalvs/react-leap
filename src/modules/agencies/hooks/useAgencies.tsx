import { useQuery } from 'react-query';

import { getAgencies } from '../api';

import { QueryConfig } from '@/lib/react-query';

type UseAgenciesOptions = {
  config?: QueryConfig<typeof getAgencies>;
};

export const useAgencies = ({ config }: UseAgenciesOptions) => {
  return useQuery('agencies', getAgencies, config);
};
