import { Box, Button, Heading } from '@chakra-ui/react';
import { ReactNode, useEffect, useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

import { MotionBox } from '@/components/common/MotionBox';
import { Head } from '@/components/Head';

type PageProps = {
  children: ReactNode;
  title?: string;
  withBackButton?: boolean;
};

export const Page = ({ children, withBackButton = false, title }: PageProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  useEffect(() => {
    if (pathname && pageRef) {
      pageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <MotionBox variants={container} initial="hidden" animate="show" ref={pageRef}>
      <Head title={title} />
      <Box py={6} px={5} minH="100vh" w="100%">
        {title && (
          <Box maxW="xl" pb={5}>
            <Heading as="h1">{title}</Heading>
          </Box>
        )}
        <Box h="100%">{children}</Box>
      </Box>
      {withBackButton && (
        <Button
          position="absolute"
          top="2rem"
          left="2rem"
          zIndex="1000"
          leftIcon={<IoIosArrowBack />}
          variant="primaryLighter"
          onClick={() => navigate(-1)}
        >
          Voltar
        </Button>
      )}
    </MotionBox>
  );
};
