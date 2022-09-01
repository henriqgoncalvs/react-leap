/* eslint-disable no-case-declarations */
import { ArrowRightIcon, ArrowLeftIcon, ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Text, Tooltip } from '@chakra-ui/react';

import { useTableContext } from './TableContainer';

export const TablePagination = () => {
  const {
    canPreviousPage,
    previousPage,
    data,
    pageOptions,
    nextPage,
    canNextPage,
    pageCount,
    pageIndex,
    gotoPage,
  } = useTableContext();
  return (
    <Box background="white" mt="1rem" borderRadius="md">
      <Flex justifyContent="space-between" m={4} alignItems="center">
        <Flex>
          <Tooltip label="Primeira Página">
            <IconButton
              aria-label="Primeira Página"
              onClick={() => gotoPage(0)}
              isDisabled={!canPreviousPage}
              icon={<ArrowLeftIcon h={3} w={3} />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Página anterior">
            <IconButton
              aria-label="Página anterior"
              onClick={previousPage}
              isDisabled={!canPreviousPage}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>
        {data && data.length > 0 && (
          <Flex alignItems="center" py={3}>
            <Text mr={8}>
              Página{' '}
              <Text fontWeight="bold" as="span">
                {pageIndex + 1}
              </Text>{' '}
              de{' '}
              <Text fontWeight="bold" as="span">
                {pageOptions?.length}
              </Text>
            </Text>
          </Flex>
        )}
        <Flex>
          <Tooltip label="Next Page">
            <IconButton
              aria-label="Próxima Página"
              onClick={nextPage}
              isDisabled={!canNextPage}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              aria-label="Última Página"
              onClick={() => gotoPage(pageCount - 1)}
              isDisabled={!canNextPage}
              icon={<ArrowRightIcon h={3} w={3} />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};
