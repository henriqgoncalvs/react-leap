import {
  Table as CTable,
  TableProps as CTableProps,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Center,
} from '@chakra-ui/react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { useTable, useSortBy } from 'react-table';

export type TableP = {
  data: Array<Record<string, unknown>>;
  columns: unknown;
} & CTableProps;

export const Table = ({ data, columns, ...props }: TableP) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data },
    useSortBy,
  );

  return (
    <Center bg="white" borderRadius="lg" py={1} px={4} w="100%" {...props} overflowX="scroll">
      <CTable {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <Th key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
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
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => (
                  <Td {...cell.getCellProps()} key={index}>
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </CTable>
    </Center>
  );
};
