import { Center, Spinner } from '@chakra-ui/react';

import scrollbarStyle from '@/styles/scrollbarStyle';

import {
  TableContainer,
  TableP,
  Table,
  TableHead,
  TableHeaderRows,
  TableBody,
  TableBodyRows,
  TablePagination,
  TableLoading,
} from './TableCompound';

export const DefaultTable = <T,>({ ...tableContainerProps }: TableP<T>) => {
  return (
    <TableContainer<T>
      overflow="auto"
      h="100%"
      sx={{
        ...scrollbarStyle,
      }}
      bg="white"
      borderRadius="xl"
      {...tableContainerProps}
    >
      <TableLoading
        loadingComponent={
          <Center height="40vh">
            <Spinner color="primary.500" size="lg" />
          </Center>
        }
      >
        <Table variant="striped">
          <TableHead position="sticky" top={0} bg="brand.700" zIndex={1} boxShadow="md">
            <TableHeaderRows
              headerCellProps={{
                color: 'white',
                textTransform: 'none',
                py: 3,
                fontWeight: '500',
                fontSize: '1rem',
              }}
            />
          </TableHead>
          <TableBody>
            <TableBodyRows />
          </TableBody>
        </Table>
      </TableLoading>
      <TablePagination />
    </TableContainer>
  );
};
