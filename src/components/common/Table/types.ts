import { Dispatch, SetStateAction } from 'react';
import { UseQueryResult } from 'react-query';

export type PaginationFilters = {
  take: number;
  skip: number;
} & Record<string, any>;

export type DataFromApi = {
  totalItems: number;
  data: any;
} & Record<string, any>;

export type UseTableProps = {
  take: number;
  queryConfig: {
    queryFn: ({ take, skip }: PaginationFilters) => Promise<any>;
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
