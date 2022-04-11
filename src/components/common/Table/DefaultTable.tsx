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

export const DefaultTable = ({ ...tableContainerProps }: TableP<T>) => {
  return (
    <TableContainer<T>
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
          borderRadius: '1.2rem',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'primary.700',
          borderRadius: '1.2px',
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
