import { Box, Stack, Center, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import errors from './errors.json';

export const Error404 = () => {
  const navigate = useNavigate();

  return (
    <Center flex="1" p="8">
      <Stack direction={{ base: 'column', md: 'row' }} align="center" spacing="0">
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Heading>{errors['404'].title}</Heading>
          <Text color="gray.600">{errors['404'].description}</Text>
          <Button onClick={() => navigate(-1)}>{errors['404'].actions.goBack}</Button>
        </Box>
      </Stack>
    </Center>
  );
};
