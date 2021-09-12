import { Center, Spinner, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { BsFillArchiveFill } from 'react-icons/bs';

import { useExpenses } from '../../hooks/useExpenses';
import { parseExpenseCategoryLabel } from '../../utils';

import { Table } from './Table';

export const ExpensesTable = () => {
  const expensesQuery = useExpenses({});

  const data = useMemo(() => expensesQuery?.data?.map((expense) => expense), [expensesQuery.data]);

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

  if (expensesQuery.isLoading)
    return (
      <Center mt={8}>
        <Spinner size="lg" />
      </Center>
    );

  if (!expensesQuery?.data?.length)
    return (
      <Center mt={8}>
        <BsFillArchiveFill />
        <Text ml={4}>No Expenses Found</Text>
      </Center>
    );

  return <Table data={data || []} columns={columns} mt={8} />;
};
