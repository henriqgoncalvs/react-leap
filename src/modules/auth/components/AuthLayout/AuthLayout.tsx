import { Container, Flex, Text } from '@chakra-ui/react';

import { Head } from '@/components/Head';
import { Page } from '@/components/Page';

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
};

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <Page>
      <Head title={title} />
      <Flex
        minH="100vh"
        w="100vw"
        position="relative"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Container maxW="container.md">
          {title && (
            <Text fontSize="4xl" mb={8} textTransform="uppercase" textAlign="center">
              {title}
            </Text>
          )}
          {subtitle && (
            <Text fontSize="sm" maxW="60%" mb={12} fontWeight="normal" textAlign="center" mx="auto">
              {subtitle}
            </Text>
          )}

          {children}
        </Container>
      </Flex>
    </Page>
  );
};
