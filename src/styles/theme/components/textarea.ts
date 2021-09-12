import { mode } from '@chakra-ui/theme-tools';

export default {
  variants: {
    outline: (props) => ({
      bg: mode('blackAlpha.50', 'whiteAlpha.50')(props),
    }),
  },
  defaultProps: {
    variant: 'outline',
  },
};
