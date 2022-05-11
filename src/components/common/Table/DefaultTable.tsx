/* eslint-disable no-case-declarations */
import { Center, Spinner } from '@chakra-ui/react';

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
        '::-webkit-scrollbar': {
          height: '0.75rem',
          width: '0.75rem',
        },
        '::-webkit-scrollbar-track': {
          height: '0.25rem',
          borderLeft: '0.125rem solid #5BA699',
          borderRight: '0.125rem solid #5BA699',
          borderTop: '0.125rem solid #5BA699',
          borderBottom: '0.125 solid #5BA699',
          background: 'primary.600',
          borderRadius: '1.2rem',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'primary.700',
          borderRadius: '0.075rem',
        },
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
