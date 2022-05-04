import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { UseInfinityScrollProps, UseInfinityScrollReturn } from './types';
export const useInfinityScroll = <T,>({
  queryFn,
}: UseInfinityScrollProps): UseInfinityScrollReturn<T> => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<T[]>([]);
  const { data: queryData } = useQuery<T[]>({ queryFn });

  useEffect(() => {
    if (queryData) {
      if (queryData.length) setData((prev) => [...prev, ...queryData]);
    }
  }, [queryData]);

  const onEndReached = useCallback(() => {}, []);

  return { data };
};
