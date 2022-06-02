import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { useTableContext } from './TableContainer';

export type TableContainerProps = {
  children: ReactNode;
  loadingComponent: ReactNode;
} & BoxProps;

export const TableLoading = ({ children, loadingComponent, ...props }: TableContainerProps) => {
  const { isLoading } = useTableContext();
  return <Box {...props}>{isLoading ? loadingComponent : children}</Box>;
};
