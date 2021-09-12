import { Stack, Text } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { useColorModeValue as mode } from '@chakra-ui/system';
import { IconType } from 'react-icons';

export type ActionItemP = {
  icon: IconType;
  name: string;
  fn: () => void;
};

export const ActionItem = ({ icon, name, fn }: ActionItemP) => {
  const hoverColor = mode('brand.600', 'white');
  return (
    <Stack
      direction="row"
      cursor="pointer"
      px={10}
      py={3}
      fontWeight="semibold"
      alignItems="center"
      _hover={{
        color: hoverColor,
        bg: 'blackAlpha.300',
      }}
      transition="all .4s ease-in-out"
      spacing={4}
      onClick={fn}
    >
      <Icon aria-label="Interation" w={5} h={5} as={icon} />
      <Text>{name}</Text>
    </Stack>
  );
};
