import { Text, BoxProps } from '@chakra-ui/layout';

export const SectionDivider = (props: BoxProps) => {
  return <Text textTransform="uppercase" px={8} pt={4} {...props} overflowWrap="initial" />;
};
