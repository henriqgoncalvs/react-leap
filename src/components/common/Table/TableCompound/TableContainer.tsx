import { Box, BoxProps } from '@chakra-ui/react';
import { createContext, ReactNode, useContext } from 'react';
import { useTable, useSortBy, usePagination, Column, TableInstance } from 'react-table';

export type TableContextValues<T extends Record<string, any>> = TableP<T> & {
  getTableProps: TableInstance['getTableProps'];
  getTableBodyProps: TableInstance['getTableBodyProps'];
  headerGroups: TableInstance['headerGroups'];
  page: TableInstance['page'];
  prepareRow: TableInstance['prepareRow'];
  canPreviousPage: TableInstance['canPreviousPage'];
  canNextPage: TableInstance['canNextPage'];
  pageOptions: TableInstance['pageOptions'];
  pageCount: TableInstance['pageCount'];
  gotoPage: TableInstance['gotoPage'];
  nextPage: TableInstance['nextPage'];
  previousPage: TableInstance['previousPage'];
  pageIndex: number;
};

export type TableP<T extends Record<string, any>> = {
  data?: T[];
  columns: Column<T>[];
  manualPagination?: {
    onPageChange: (page: number) => number;
    pageIndex: number;
    totalPages: number;
  };
  isLoading?: boolean;
  isInfiniteScroll?: boolean;
  children?: ReactNode;
} & Partial<BoxProps>;

const TableContext = createContext({} as TableContextValues<Record<string, any>>);

export const TableContainer = <T,>({
  data,
  columns,
  manualPagination,
  isInfiniteScroll = false,
  isLoading,
  children,
  ...props
}: TableP<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page: pageTable,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    rows,
    state: { pageIndex },
  } = useTable(
    {
      columns: columns as Column<Record<string, any>>[],
      data: data || [],
      manualPagination: !!manualPagination,
      ...(manualPagination
        ? {
            initialState: { pageIndex: manualPagination?.pageIndex },
            pageCount: manualPagination.totalPages,
            stateReducer: (nextState, action) => {
              switch (action.type) {
                case 'gotoPage': {
                  const nextPage = manualPagination.onPageChange(nextState.pageIndex);
                  return { ...nextState, pageIndex: nextPage };
                }
                default:
                  return nextState;
              }
            },
          }
        : {}),
    },
    useSortBy,
    usePagination,
  );

  const page = isInfiniteScroll ? rows : pageTable;

  return (
    <TableContext.Provider
      value={{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        pageIndex,
        isLoading,
        manualPagination,
        data,
        columns: columns as Column<Record<string, any>>[],
        ...props,
      }}
    >
      <Box {...props}>{children}</Box>
    </TableContext.Provider>
  );
};

export const useTableContext = () => useContext(TableContext);
