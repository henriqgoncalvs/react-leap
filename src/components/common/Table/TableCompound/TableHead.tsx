import { TableHeadProps as CTableHeadProps, Thead } from '@chakra-ui/react';

type TableHeadProps = CTableHeadProps;

export const TableHead = ({ children, ...tableHeadProps }: TableHeadProps) => {
  return <Thead {...tableHeadProps}>{children}</Thead>;
};
