/* eslint-disable no-case-declarations */
import { Tr, Th, chakra, TableRowProps, TableColumnHeaderProps } from '@chakra-ui/react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

import { useTableContext } from './TableContainer';

export type TableHeaderRowsProps = {
  headerRowProps?: TableRowProps;
  headerCellProps?: TableColumnHeaderProps;
};

export const TableHeaderRows = ({ headerRowProps, headerCellProps }: TableHeaderRowsProps) => {
  const { headerGroups } = useTableContext();

  return (
    <>
      {headerGroups.map((headerGroup, indexGroup) => (
        <Tr {...headerGroup.getHeaderGroupProps()} key={indexGroup} {...headerRowProps}>
          {headerGroup.headers.map((column, indexHeader) => (
            <Th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              key={indexHeader}
              {...headerCellProps}
            >
              {column.render('Header')}
              <chakra.span pl="4" d="inline-block">
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <GoTriangleUp aria-label="sorted descending" />
                  ) : (
                    <GoTriangleDown aria-label="sorted ascending" />
                  )
                ) : null}
              </chakra.span>
            </Th>
          ))}
        </Tr>
      ))}
    </>
  );
};
