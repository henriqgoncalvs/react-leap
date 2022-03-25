import { useCallback, useState, useMemo } from 'react';
import { useQuery } from 'react-query';

import { UseTableProps, UseTableReturn } from './types';

export const useTableInstance = <T extends unknown>({
  take,
  queryConfig,
}: UseTableProps): UseTableReturn<T> => {
  const [filters, setFilters] = useState<Record<string, any>>({ take: take, skip: 0 });
  const page = filters.skip / filters.take;

  const query = useQuery<T>([queryConfig.key, filters], () =>
    queryConfig.queryFn({ queryKey: [queryConfig.key, filters] }),
  );
  const totalPages = useMemo(() => {
    const parseData = query.data as any;
    return Math.ceil((parseData?.totalItems || 0) / filters.take);
  }, [filters.take, query.data]);

  const onPageChange = useCallback(
    (nextPage: number) => {
      if (nextPage !== page) setFilters((prev) => ({ ...prev, skip: nextPage * filters.take }));
      return nextPage;
    },
    [filters.take, page],
  );
  return {
    pagination: {
      pageIndex: page,
      onPageChange,
      totalPages: totalPages,
    },
    query,
    setFilters: (filters) => setFilters({ ...filters, skip: 0, take }),
  };
};
