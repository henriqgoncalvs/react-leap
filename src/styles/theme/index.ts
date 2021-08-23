import { extendTheme } from '@chakra-ui/react';

import { styles } from './chakra-styles';
import * as components from './components';
import { config } from './config';
import foundations from './foundations';

export default extendTheme({
  config,
  styles,
  ...foundations,
  components: { ...(components as any) },
});
