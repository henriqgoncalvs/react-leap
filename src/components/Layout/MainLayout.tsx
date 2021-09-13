import { Box, Stack, useMediaQuery } from '@chakra-ui/react';

import { Scroll } from '@/components/common/Scroll';
import { Sidebar, MobileSidebar } from '@/components/Sidebar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <Scroll>
      <Box textStyle="light">
        {/* <Navbar /> */}
        <Box pos="relative" h="max-content">
          <Stack direction="row">
            <Sidebar />
            {isSmallScreen && <MobileSidebar />}
            <Box
              w="full"
              minH="100vh"
              bgPos="right"
              bgAttachment="fixed"
              bgSize="cover"
              bgRepeat="no-repeat"
              position="relative"
              _before={{
                content: '""',
                w: '100%',
                h: '100%',
                pos: 'fixed',
                right: '0',
                top: '0',
                bg: '#bb00ff89',
                bgAttachment: 'fixed',
                zIndex: '-1',
              }}
            >
              {children}
            </Box>
          </Stack>
        </Box>
      </Box>
    </Scroll>
  );
};
