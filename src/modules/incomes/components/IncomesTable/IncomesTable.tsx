import { Center, Spinner, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { BsFillArchiveFill } from 'react-icons/bs';

import { getIncomes } from '../../api';
import { Income } from '../../types';
import { parseIncomeSourceLabel } from '../../utils';

import { DefaultTable, useTableInstance } from '@/components/common/Table';

export const IncomesTable = () => {
  const {
    pagination: { pageIndex, onPageChange, totalPages },
    query: { data, isLoading, isError },
  } = useTableInstance<Income[]>({
    take: 1,
    queryConfig: {
      queryFn: getIncomes,
      key: 'get-incomes-query',
    },
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

  if (isLoading)
    return (
      <Center mt={8}>
        <Spinner size="lg" />
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
    <DefaultTable
      columns={columns}
      data={data || []}
      isLoading={isLoading}
      manualPagination={{
        onPageChange,
        pageIndex,
        totalPages,
      }}
    />
  );
};
