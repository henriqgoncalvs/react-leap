import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { UseInfinityScrollProps, UseInfinityScrollReturn } from './types';
export const useInfinityScroll = <T,>({
  queryFn,
  filters,
  take,
  queryKey,
}: UseInfinityScrollProps): UseInfinityScrollReturn<T> => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<T[]>([]);
  const { data: queryData, isLoading } = useQuery<{ data: T[]; totalItems: number }>(
    [queryKey, filters, page],
    () => queryFn({ ...filters, take, skip: take * page }),
  );

  useEffect(() => {
    if (queryData && queryData.data && queryData.data.length) {
      setData((prev) => [...prev, ...queryData.data]);
    }
  }, [queryData]);

  const onEndReached = useCallback(() => {
    if (queryData?.data && queryData?.data.length >= take) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [queryData, take]);

  return { data, onEndReached, isLoading };
};
