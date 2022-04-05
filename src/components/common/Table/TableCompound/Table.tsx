import { Table as ChakraTable, TableProps as ChakraTableProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { useTableContext } from './TableContainer';

type TableProps = {
  children: ReactNode;
} & ChakraTableProps;

export const Table = ({ children, ...tableProps }: TableProps) => {
  const { getTableProps } = useTableContext();
  return (
    <ChakraTable {...getTableProps()} {...tableProps}>
      {children}
    </ChakraTable>
  );
};
