/* eslint-disable no-case-declarations */
import { ArrowRightIcon, ArrowLeftIcon, ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Table as CTable,
  TableProps as CTableProps,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Box,
  Flex,
  IconButton,
  Text,
  Tooltip,
  Center,
  Spinner,
  StyleProps,
} from '@chakra-ui/react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { useTable, useSortBy, usePagination, Column } from 'react-table';

export type TableP<T extends Record<string, any>> = {
  data?: T[];
  columns: readonly Column<T>[];
  manualPagination?: {
    totalItems: number;
    onPageChange: (page: number) => number;
    pageIndex: number;
    take: number;
  };
  isLoading?: boolean;
  $headerProps?: StyleProps;
} & CTableProps;

export const Table = <T extends Record<string, any>>({
  data,
  columns,
  manualPagination,
  isLoading,
  $headerProps,
  ...props
}: TableP<T>) => {
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
            pageCount: Math.ceil(manualPagination.totalItems / manualPagination.take),
            stateReducer: (nextState, action) => {
              switch (action.type) {
                case 'gotoPage':
                  const nextPage = manualPagination.onPageChange(nextState.pageIndex);
                  return { ...nextState, pageIndex: nextPage };
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
    <>
      <Box
        overflow="auto"
        h="100%"
        sx={{
          '::-webkit-scrollbar': {
            height: '12px',
            width: '12px',
          },
          '::-webkit-scrollbar-track': {
            height: '4px',
            borderLeft: '2px solid #5BA699',
            borderRight: '2px solid #5BA699',
            borderTop: '2px solid #5BA699',
            borderBottom: '2px solid #5BA699',
            background: 'primary.600',
            borderRadius: '24px',
          },
          '::-webkit-scrollbar-thumb': {
            background: 'primary.700',
            borderRadius: '24px',
          },
        }}
        bg="white"
        borderRadius="xl"
        {...props}
      >
        <Box py={2} px={2}>
          {isLoading ? (
            <Center height="40vh">
              <Spinner color="primary.500" size="lg" />
            </Center>
          ) : (
            data && (
              <CTable variant="striped" {...getTableProps()}>
                <Thead position="sticky" top={0} bg="#DAFAF4" zIndex={1} boxShadow="md">
                  {headerGroups.map((headerGroup, indexGroup) => (
                    <Tr {...headerGroup.getHeaderGroupProps()} key={indexGroup}>
                      {headerGroup.headers.map((column, indexHeader) => (
                        <Th
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                          color="#06A78D"
                          key={indexHeader}
                          textTransform="none"
                          py={5}
                          fontWeight="500"
                          fontSize="1.2rem"
                          {...$headerProps}
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
                </Thead>
                <Tbody {...getTableBodyProps()}>
                  {page?.map((row, index) => {
                    prepareRow(row);
                    return (
                      <Tr {...row.getRowProps()} key={index}>
                        {row.cells.map((cell, index) => (
                          <Td px={2} py={3} {...cell.getCellProps()} key={index}>
                            {cell.render('Cell')}
                          </Td>
                        ))}
                      </Tr>
                    );
                  })}
                </Tbody>
              </CTable>
            )
          )}
        </Box>
      </Box>
      <Box background="white" mt="1rem" borderRadius="md">
        <Flex justifyContent="space-between" m={4} alignItems="center">
          <Flex>
            <Tooltip label="Primeira Página">
              <IconButton
                aria-label="Primeira Página"
                onClick={() => gotoPage(0)}
                isDisabled={!canPreviousPage}
                icon={<ArrowLeftIcon h={3} w={3} />}
                mr={4}
              />
            </Tooltip>
            <Tooltip label="Página anterior">
              <IconButton
                aria-label="Página anterior"
                onClick={previousPage}
                isDisabled={!canPreviousPage}
                icon={<ChevronLeftIcon h={6} w={6} />}
              />
            </Tooltip>
          </Flex>
          {data && data.length > 0 && (
            <Flex alignItems="center" py={3}>
              <Text mr={8}>
                Página{' '}
                <Text fontWeight="bold" as="span">
                  {pageIndex + 1}
                </Text>{' '}
                de{' '}
                <Text fontWeight="bold" as="span">
                  {pageOptions?.length}
                </Text>
              </Text>
            </Flex>
          )}
          <Flex>
            <Tooltip label="Next Page">
              <IconButton
                aria-label="Próxima Página"
                onClick={nextPage}
                isDisabled={!canNextPage}
                icon={<ChevronRightIcon h={6} w={6} />}
              />
            </Tooltip>
            <Tooltip label="Last Page">
              <IconButton
                aria-label="Última Página"
                onClick={() => gotoPage(pageCount - 1)}
                isDisabled={!canNextPage}
                icon={<ArrowRightIcon h={3} w={3} />}
                ml={4}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
