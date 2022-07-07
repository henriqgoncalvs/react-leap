import { Center, Spinner, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { BsFillArchiveFill } from 'react-icons/bs';

import { useTableInstance, DefaultTable } from '@/components/common/Table';

import { getExpenses } from '../../api';
import { Expense } from '../../types';
import { parseExpenseCategoryLabel } from '../../utils';

export const ExpensesTable = () => {
  const {
    pagination: { pageIndex, onPageChange, totalPages },
    query: { data, isLoading, isError },
  } = useTableInstance<Expense[]>({
    take: 1,
    queryConfig: {
      queryFn: getExpenses,
      key: 'get-expenses-query',
    },
  });

  const columns = useMemo(
    () => [
      {
        Header: 'Value',
        accessor: 'value',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Category',
        accessor: 'category',
        Cell: ({ value }) => parseExpenseCategoryLabel(value),
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: ({ value }) => dayjs(value).format('DD/MM'),
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
        <Text ml={4}>No Expenses Found</Text>
      </Center>
    );

  return (
    <DefaultTable<any>
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
