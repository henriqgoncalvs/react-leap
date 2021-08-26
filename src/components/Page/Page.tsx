import { Button, Flex } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

import textura from '@/assets/textura.png';

type PageProps = {
  withBackButton?: boolean;
  children: React.ReactNode;
};

export const Page = ({ withBackButton = false, children }: PageProps) => {
  return (
    <Flex
      maxW="100vw"
      minH="100vh"
      justifyContent="center"
      bgImg={textura}
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
        bgGradient: 'linear(to-l, #BC00FF29, #BC00FF00)',
        bgAttachment: 'fixed',
        zIndex: '-1',
      }}
    >
      {withBackButton && (
        <Button
          position="absolute"
          top="2rem"
          left="2rem"
          zIndex="1000"
          leftIcon={<IoIosArrowBack />}
          variant="primaryLighter"
          as={Link}
          to="/"
        >
          Voltar
        </Button>
      )}
      {children}
    </Flex>
  );
};
