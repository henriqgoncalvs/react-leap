import { Center, Spinner, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { BsFillArchiveFill } from 'react-icons/bs';

import { InfiniteScroll, useInfiniteScroll } from '@/components/common/InfiniteScroll';
import {
  TableContainer,
  Table,
  TableHead,
  TableHeaderRows,
  TableBody,
  TableBodyRows,
} from '@/components/common/Table/TableCompound';

import { getIncomes } from '../../api';
import { Income } from '../../types';
import { parseIncomeSourceLabel } from '../../utils';

export const IncomesTable = () => {
  const { onEndReached, data, isLoading, isError } = useInfiniteScroll<Income>({
    take: 5,
    queryFn: getIncomes,
    filters: {},
    queryKey: 'get-incomes-query',
  });

  const columns = useMemo(
    () => [
      {
        Header: 'Source',
        accessor: 'source',
        Cell: ({ value }) => parseIncomeSourceLabel(value),
      },
      {
        Header: 'Value',
        accessor: 'value',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: ({ value }) => dayjs(value).format('DD/MM'),
      },
      {
        Header: 'Created at',
        accessor: 'createdAt',
        Cell: ({ value }) => dayjs(value).format('DD/MM hh:mm:ss'),
      },
    ],
    [],
  );

  const sanitizedData = data?.map((expense) => expense);

  if (isError)
    return (
      <Center mt={8}>
        <BsFillArchiveFill />
        <Text ml={4}>A error has occured</Text>
      </Center>
    );

  if (!sanitizedData?.length && !isLoading)
    return (
      <Center mt={8}>
        <BsFillArchiveFill />
        <Text ml={4}>No Incomes Found</Text>
      </Center>
    );

  return (
    <InfiniteScroll onEndReached={onEndReached} threshold={1}>
      <TableContainer<any>
        bg="white"
        overflow="auto"
        h="13rem"
        borderRadius="xl"
        columns={columns}
        isInfiniteScroll={true}
        data={sanitizedData || []}
        isLoading={isLoading}
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
        {isLoading && (
          <Center w="100%" mt={8}>
            <Spinner size="lg" />
          </Center>
        )}
      </TableContainer>
    </InfiniteScroll>
  );
};
