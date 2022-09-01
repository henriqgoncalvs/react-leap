import { Tbody, TableBodyProps as CTableBodyProps } from '@chakra-ui/react';

import { useTableContext } from './TableContainer';

type TableBodyProps = CTableBodyProps;

export const TableBody = ({ children, ...tableBodyProps }: TableBodyProps) => {
  const { getTableBodyProps } = useTableContext();
  return (
    <Tbody {...getTableBodyProps()} {...tableBodyProps}>
      {children}
    </Tbody>
  );
};
