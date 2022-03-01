import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Box, Center, useMediaQuery } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { Tooltip } from '@chakra-ui/tooltip';
import { useLocation } from 'react-router-dom';

import { Link } from '@/components/common/Link';

import { NavItemP } from './NavItem';

export const NavCollapsedItem = ({
  name,
  scheme = 'black',
  icon,
  to,
  count,
}: NavItemP & { scheme?: string }) => {
  const { pathname } = useLocation();
  const [isSmallScreen] = useMediaQuery('(max-width: 860px)');

  const active = pathname === to;

  return (
    <Center d={isSmallScreen ? 'none' : 'flex'} transition="all .2s ease-in-out">
      <Box as={Link} to={to || ''} ml="auto" mr="auto" w="40px">
        <Tooltip hasArrow label={name} placement="right">
          <Center>
            <IconButton
              transition="all .3s ease-in-out"
              colorScheme={active ? 'brand' : scheme}
              aria-label={name}
              variant={active ? '@primary' : '@secondary'}
              borderRadius="md"
              // boxSize="40px"
              alignSelf="center"
              _focus={{ shadow: 'none' }}
              icon={
                <>
                  <Icon as={icon} fontSize="lg" color="white" />
                  {count && (
                    <chakra.span
                      pos="absolute"
                      top="2px"
                      right="3px"
                      px={2}
                      py={1}
                      fontSize="xs"
                      fontWeight="bold"
                      lineHeight="none"
                      color="pink.100"
                      transform="translate(50%,-50%)"
                      bg="pink.600"
                      rounded="full"
                      zIndex="tooltip"
                    >
                      {count}
                    </chakra.span>
                  )}
                </>
              }
            />
          </Center>
        </Tooltip>
      </Box>
    </Center>
  );
};
