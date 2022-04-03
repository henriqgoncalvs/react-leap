import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Spinner,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import _ from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

type Option = {
  label: string;
  value: string;
};

type AutocompleteOptionsProps = {
  isMulti?: boolean;
  title?: string;
  isLoading?: boolean;
  options?: Option[];
  initialValue?: Option[] | undefined;
  callback: (search: string) => any;
  onChange?: (option: string | string[]) => void;
};

export function AutocompleteOptions({
  isMulti = true,
  title,
  initialValue,
  isLoading = false,
  options = [
    { label: 'Recife, PE', value: '123' },
    { label: 'São Paulo, SP', value: '147' },
    { label: 'Rio de Janeiro, RJ', value: '234' },
    { label: 'Belo Horizonte, MG', value: '456' },
  ],
  callback,
  onChange = () => {},
}: AutocompleteOptionsProps) {
  const ref = useRef(null);
  const [search, setSearch] = useState<string>('');
  const [activeFilters, setActiveFilters] = useState<Option[]>(
    initialValue?.length ? initialValue : [],
  );

  const debouncedSearch = _.debounce(() => search, 500);
  useEffect(() => {
    callback(debouncedSearch() as string);
  }, [callback, debouncedSearch]);

  const currentOptions = useMemo(
    () => _.differenceWith(options, activeFilters, _.isEqual),
    [activeFilters, options],
  );

  useEffect(() => {
    if (isMulti) {
      onChange(activeFilters.map(({ value }) => value));
      return;
    }

    if (activeFilters.length) {
      onChange(activeFilters[0].value);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters, isMulti]);

  return (
    <Box minW="10rem">
      {title && (
        <Text fontSize="0.9rem" m="0 0 0.2rem 1rem" color="white">
          {title}
        </Text>
      )}

      <Popover>
        <PopoverTrigger>
          <Button
            color="gray.200"
            textAlign="right"
            w="100%"
            h="fit-content"
            fontSize="0.8rem"
            fontWeight="500"
            p="0.7rem 2rem 0.6rem 1rem"
            border="1px solid"
            bg="culturedWhite"
            justifyContent="space-between"
            rightIcon={<Icon as={RiArrowDownSLine} w="1rem" h="1rem" color="primary.600" />}
          >
            <Text color={activeFilters.length ? 'gray.700' : 'gray.400'}>
              {isMulti
                ? activeFilters.length
                  ? `(${activeFilters.length}) Selecionados`
                  : 'Selecione'
                : activeFilters.length
                ? activeFilters[0].label
                : 'Selecione'}
            </Text>
          </Button>
        </PopoverTrigger>

        <Box zIndex="999999999999999999" position="absolute" ref={ref} bg="transparent" />

        <Portal containerRef={ref}>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>
              <Box mr="2rem">
                <Text pb="0.5rem">Digite para filtrar:</Text>
                <Input value={search} onChange={(event) => setSearch(event.target.value)} />
              </Box>
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Text pb="0.5rem">{isMulti ? 'Ativos:' : 'Ativo:'}</Text>
              <Box>
                {activeFilters.length ? (
                  activeFilters.map(({ label, value }) => (
                    <Tag
                      bg="primary.300"
                      size="md"
                      key={value}
                      borderRadius="full"
                      variant="solid"
                      m="0.25rem 0.5rem 0.25rem 0"
                    >
                      <TagLabel w="fit-content">{label}</TagLabel>
                      <TagCloseButton
                        onClick={() => {
                          setActiveFilters((prevState) =>
                            prevState.filter((option) => option.value !== value),
                          );
                        }}
                      />
                    </Tag>
                  ))
                ) : (
                  <Flex w="100%" justifyContent="center">
                    <Text color="gray.500" fontSize="0.9rem" mb="0.5rem">
                      Nenhuma opção escolhida
                    </Text>
                  </Flex>
                )}
              </Box>
            </PopoverBody>
            <PopoverFooter px="0">
              <Text m="0 0 0.5rem 0.8rem">Selecione:</Text>
              <Box m="0" p="0" w="100%" maxH="20rem" overflow="hidden auto">
                {isLoading ? (
                  <Flex mb="0.5rem" w="100%" justifyContent="center">
                    <Spinner color="primary.500" />
                  </Flex>
                ) : currentOptions.length ? (
                  currentOptions.map(({ label, value }) => (
                    <Button
                      key={value}
                      w="100%"
                      justifyContent="left"
                      borderRadius="0"
                      variant="ghost"
                      _hover={{ bg: 'primary.50' }}
                      fontWeight="500"
                      color="gray.700"
                      onClick={() => {
                        if (isMulti) {
                          setActiveFilters((prevState) => [...prevState, { label, value }]);
                          return;
                        }

                        setActiveFilters([{ label, value }]);
                        return;
                      }}
                    >
                      {label}
                    </Button>
                  ))
                ) : (
                  <Flex w="100%" justifyContent="center">
                    <Text color="gray.500" fontSize="0.9rem" mb="0.5rem">
                      Nenhuma opção disponível
                    </Text>
                  </Flex>
                )}
              </Box>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </Box>
  );
}
