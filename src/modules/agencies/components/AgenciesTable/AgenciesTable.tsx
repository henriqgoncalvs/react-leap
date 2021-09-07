import { Center, Spinner, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { BsFillArchiveFill } from 'react-icons/bs';

import { useAgencies } from '../../hooks/useAgencies';

import { Table } from './Table';

export const AgenciesTable = () => {
  const agenciesQuery = useAgencies({});

  console.log(agenciesQuery.data);

  const data = useMemo(
    () =>
      agenciesQuery?.data?.map((agency) => ({
        ...agency,
        createdAt: dayjs(new Date(agency.createdAt).toISOString()).format('DD/MM hh:ss'),
      })),
    [agenciesQuery.data],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Bio',
        accessor: 'bio',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Owner',
        accessor: 'owner',
      },
      {
        Header: 'Created at',
        accessor: 'createdAt',
        formater: (value: number) => {
          console.log(value);
          return dayjs(new Date(value)).format('DD/MM hh:mm:ss');
        },
      },
    ],
    [],
  );

  if (agenciesQuery.isLoading)
    return (
      <Center mt={8}>
        <Spinner size="lg" />
      </Center>
    );

  if (!agenciesQuery?.data?.length)
    return (
      <Center mt={8}>
        <BsFillArchiveFill />
        <Text ml={4}>No Agencies Found</Text>
      </Center>
    );

  return <Table data={data || []} columns={columns} mt={8} />;
};
