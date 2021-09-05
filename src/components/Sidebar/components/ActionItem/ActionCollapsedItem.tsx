import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Box, Center } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/tooltip';

import { ActionItemP } from './ActionItem';

export const ActionCollapsedItem = ({ name, icon, fn }: ActionItemP) => {
  return (
    <Center>
      <Box ml="auto" mr="auto" w="40px" onClick={fn}>
        <Tooltip hasArrow label={name} placement="right">
          <Center>
            <IconButton
              transition="all .3s ease-in-out"
              aria-label={name}
              borderRadius="md"
              alignSelf="center"
              _focus={{ shadow: 'none' }}
              icon={
                <>
                  <Icon as={icon} fontSize="lg" />
                </>
              }
            />
          </Center>
        </Tooltip>
      </Box>
    </Center>
  );
};
