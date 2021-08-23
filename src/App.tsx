import { Heading } from '@chakra-ui/react';

import { AppProvider } from '@/context';

function App() {
  return (
    <AppProvider>
      <Heading as="h1">Titulo</Heading>App
    </AppProvider>
  );
}

export default App;
