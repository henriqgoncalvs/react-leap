import { Box, chakra, BoxProps } from '@chakra-ui/react';
import { ReactNode, FC } from 'react';

export interface IconProps extends BoxProps {
  icon: FC;
  boxProps?: BoxProps;
}

export const Icon = ({ icon: IconEl, boxProps, ...rest }: IconProps): ReactNode => {
  const ChakraIcon = chakra(IconEl);

  return (
    <Box
      as="span"
      d="inline-block"
      position="relative"
      w="1em"
      flex="none"
      _before={{
        content: '"."',
        visibility: 'hidden',
      }}
      {...boxProps}
    >
      <ChakraIcon
        as={IconEl}
        w="1em"
        h="1em"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        {...rest}
      />
    </Box>
  );
};
