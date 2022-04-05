import { StyleProps, Box, BoxProps } from '@chakra-ui/react';
import { createContext, ReactNode, useContext } from 'react';
import { useTable, useSortBy, usePagination, Column } from 'react-table';

export type TableContextValues<T> = TableP<T> & any;

export type TableP<T extends Record<string, any>> = {
  data?: T[];
  columns: readonly Column<T>[];
  manualPagination?: {
    onPageChange: (page: number) => number;
    pageIndex: number;
    totalPages: number;
  };
  isLoading?: boolean;
  $headerProps?: StyleProps;
  children?: ReactNode;
} & BoxProps;

const TableContext = createContext({} as TableContextValues<any>);

export const TableContainer = ({
  data,
  columns,
  manualPagination,
  isLoading,
  children,
  ...props
}: TableP<any>) => {
  const {
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
    state: { pageIndex },
  } = useTable(
    {
      columns: columns as any,
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
        columns,
        ...props,
      }}
    >
      <Box {...props}>{children}</Box>
    </TableContext.Provider>
  );
};

export const useTableContext = () => useContext(TableContext);
