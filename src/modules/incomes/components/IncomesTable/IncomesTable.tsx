import { Center, Spinner, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { BsFillArchiveFill } from 'react-icons/bs';

import { useIncomes } from '../../hooks/useIncomes';
import { parseIncomeSourceLabel } from '../../utils';

import { Table } from './Table';

export const IncomesTable = () => {
  const incomesQuery = useIncomes({});

  const data = useMemo(() => incomesQuery?.data?.map((income) => income), [incomesQuery.data]);

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

  if (incomesQuery.isLoading)
    return (
      <Center mt={8}>
        <Spinner size="lg" />
      </Center>
    );

  if (!incomesQuery?.data?.length)
    return (
      <Center mt={8}>
        <BsFillArchiveFill />
        <Text ml={4}>No Incomes Found</Text>
      </Center>
    );

  return <Table data={data || []} columns={columns} mt={8} />;
};
