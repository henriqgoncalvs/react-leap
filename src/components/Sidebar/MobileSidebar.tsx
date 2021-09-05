import { Stack } from '@chakra-ui/layout';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/modal';
import history from 'history/browser';
import { useEffect } from 'react';

import { NavigationSection, ActionSection, FooterSection, SectionDivider } from './components';
import { useSidebar } from './store/sidebar';

export const MobileSidebar = () => {
  const {
    state: { isOpen },
    actions: { toggleSidebar },
  } = useSidebar();
  useEffect(() => {
    const unlisten = history.listen(({ action }) => {
      if (action) toggleSidebar;
    });

    return () => {
      unlisten();
    };
  }, [toggleSidebar]);

  return (
    <Drawer isOpen={!isOpen} onClose={toggleSidebar} placement="left">
      <DrawerOverlay display={['initial', 'none']} w="50px">
        <DrawerContent layerStyle="neutral" py={8}>
          <Stack spacing={2} fontSize="sm">
            <DrawerCloseButton />

            <NavigationSection />

            <ActionSection />

            <SectionDivider />

            <FooterSection />
          </Stack>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
