import { useCallback, useState, useMemo } from 'react';
import { useQuery } from 'react-query';

import { DataFromApi, PaginationFilters, UseTableProps, UseTableReturn } from './types';

export const useTableInstance = <T extends unknown>({
  take,
  queryConfig,
}: UseTableProps): UseTableReturn<T> => {
  const [filters, setFilters] = useState<PaginationFilters>({ take, skip: 0 });
  const page = filters.skip / filters.take;

  const query = useQuery<T>([queryConfig.key, filters], () => queryConfig.queryFn({ ...filters }));

  const totalPages = useMemo(() => {
    const parseData = query.data as DataFromApi;
    return Math.ceil((parseData?.totalItems || 0) / filters.take);
  }, [filters.take, query.data]);

  const onPageChange = useCallback(
    (nextPage: number) => {
      if (nextPage !== page) setFilters((prev) => ({ ...prev, skip: nextPage * filters.take }));
      return nextPage;
    },
    [filters.take, page],
  );

  const queryWithoutCount = {
    ...query,
    data: (query.data as DataFromApi)?.data,
  };

  return {
    pagination: {
      pageIndex: page,
      onPageChange,
      totalPages: totalPages,
    },
    query: queryWithoutCount,
    setFilters: (filters) => setFilters({ ...filters, skip: 0, take }),
  };
};
