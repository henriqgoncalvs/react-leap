import { Container, Heading, Text } from '@chakra-ui/react';

import { Head } from '@/components/Head';
import * as LC from '@/components/LC';

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
};

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <LC.Vertical center position="relative" w="100%" minH="100vh" py="5%">
        <Container maxW="container.md">
          {title && (
            <Heading as="h1" fontSize="4xl" mb={8} textTransform="uppercase" textAlign="center">
              {title}
            </Heading>
          )}
          {subtitle && (
            <Text fontSize="sm" maxW="60%" mb={12} fontWeight="normal" textAlign="center" mx="auto">
              {subtitle}
            </Text>
          )}

          <LC.Vertical
            center
            w="60%"
            bg="white"
            mx="auto"
            py={8}
            px={12}
            borderRadius="lg"
            boxShadow="md"
          >
            {children}
          </LC.Vertical>
        </Container>
      </LC.Vertical>
    </>
  );
};
