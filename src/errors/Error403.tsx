import { Button, Stack, Center, Heading, Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import errors from './errors.json';

export const Error403 = () => {
  const history = useHistory();

  return (
    <Center flex="1" p="8">
      <Stack align="center" textAlign="center">
        <Heading>{errors['403'].title}</Heading>
        <Text color="gray.600">{errors['403'].description}</Text>
        <Button onClick={() => history.goBack()}>{errors['403'].actions}</Button>
      </Stack>
    </Center>
  );
};
