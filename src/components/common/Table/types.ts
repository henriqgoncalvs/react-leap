import { Dispatch, SetStateAction } from 'react';
import { UseQueryResult } from 'react-query';
export type UseTableProps = {
  take: number;
  queryConfig: {
    queryFn: (props: any) => Promise<any>;
    key?: string;
  };
};

export type UseTableReturn<T = any> = {
  pagination: {
    pageIndex: number;
    onPageChange: (nextPage: number) => number;
    totalPages: number;
  };
  query: UseQueryResult<T, unknown>;
  setFilters: Dispatch<SetStateAction<Record<string, any>>>;
};
