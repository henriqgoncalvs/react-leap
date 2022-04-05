/* eslint-disable no-case-declarations */
import { Tr, Td, TableRowProps, TableCellProps } from '@chakra-ui/react';

import { useTableContext } from './TableContainer';

export type TableBodyRowsProps = {
  bodyRowProps?: TableRowProps;
  bodyCellProps?: TableCellProps;
};

export const TableBodyRows = ({ bodyCellProps, bodyRowProps }: TableBodyRowsProps) => {
  const { page, prepareRow } = useTableContext();

  return page?.map((row, index) => {
    prepareRow(row);
    return (
      <Tr {...row.getRowProps()} key={index} {...bodyRowProps}>
        {row.cells.map((cell, index) => (
          <Td px={2} py={3} {...cell.getCellProps()} key={index} {...bodyCellProps}>
            {cell.render('Cell')}
          </Td>
        ))}
      </Tr>
    );
  });
};
