import { TableHeadProps as CTableHeadProps, Thead } from '@chakra-ui/react';
import { ReactNode } from 'react';

type TableHeadProps = {
  children: ReactNode;
} & CTableHeadProps;

export const TableHead = ({ children, ...tableHeadProps }: TableHeadProps) => {
  return <Thead {...tableHeadProps}>{children}</Thead>;
};
