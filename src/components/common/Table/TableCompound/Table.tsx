import { Table as ChakraTable, TableProps as ChakraTableProps } from '@chakra-ui/react';

import { useTableContext } from './TableContainer';

type TableProps = ChakraTableProps;

export const Table = ({ children, ...tableProps }: TableProps) => {
  const { getTableProps } = useTableContext();
  return (
    <ChakraTable {...getTableProps()} {...tableProps}>
      {children}
    </ChakraTable>
  );
};
