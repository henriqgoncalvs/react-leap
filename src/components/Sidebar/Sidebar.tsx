import { Divider, Spacer, Stack } from '@chakra-ui/layout';
import { Box, Button, Center, IconButton, useOutsideClick, useMediaQuery } from '@chakra-ui/react';
import { useRef } from 'react';
import { HiArrowNarrowLeft, HiMenuAlt2 } from 'react-icons/hi';

import { Logo, LogoCollapsed } from '../common/Logo';

import { NavigationSection, ActionSection, FooterSection } from './components';
import { useSidebar } from './store/sidebar';

export const Sidebar = () => {
  const sidebarRef = useRef(null);
  const {
    state: { isOpen },
    actions: { toggleSidebar },
  } = useSidebar();
  const [isSmallScreen] = useMediaQuery('(max-width: 860px)');

  useOutsideClick({
    ref: sidebarRef,
    handler: () => {
      if (isOpen) toggleSidebar();
    },
  });

  return (
    <Box
      // Uncomment if you want the Content Layout to resize on Sidebar open
      // w={isOpen ? { base: '400px', lg: '370px', xl: '360px' } : '100px'}
      minW={[0, 0, 0, '60px']}
      transition="width .4s ease-in-out"
      position="relative"
      zIndex="overlay"
      ref={sidebarRef}
    >
      <Stack
        mx={4}
        my={4}
        bg="white"
        overflowX="clip"
        maxH="95vh"
        pt={[isOpen ? 4 : 1, 4]}
        pb={[isOpen ? 4 : 1, 4]}
        layerStyle="card"
        rounded="xl"
        transition="all .4s ease-in-out"
        position="fixed"
        w={isOpen ? (isSmallScreen ? ['90%', '250px'] : '250px') : ['50px', '60px']}
        shadow="md"
        spacing={2}
        fontSize="sm"
      >
        {!isSmallScreen ? (
          isOpen ? (
            <Center w="full" py={3}>
              <Logo maxW="min(60%, 200px)" />
            </Center>
          ) : (
            <Center w="full" px={2}>
              <LogoCollapsed />
            </Center>
          )
        ) : (
          <></>
        )}

        {!isSmallScreen ? <Divider /> : <></>}

        {isOpen ? (
          <Button
            variant="ghost"
            leftIcon={<HiArrowNarrowLeft />}
            onClick={toggleSidebar}
            w="100%"
            borderRadius="0px"
          >
            Fechar
          </Button>
        ) : (
          <Center>
            <IconButton
              colorScheme="brand"
              variant="ghost"
              fontSize="2xl"
              aria-label="Toggle Actions"
              icon={<HiMenuAlt2 />}
              transition="all .4s ease-in-out"
              onClick={toggleSidebar}
            />
          </Center>
        )}

        {!isSmallScreen || isOpen ? <Divider /> : <></>}

        {!isSmallScreen || isOpen ? <Spacer /> : <></>}

        <NavigationSection />

        <ActionSection />

        {!isSmallScreen || isOpen ? <Spacer /> : <></>}

        {!isSmallScreen || isOpen ? <Divider /> : <></>}

        {!isSmallScreen || isOpen ? <Spacer /> : <></>}

        <FooterSection />
      </Stack>
    </Box>
  );
};
