import { Image, ImageProps } from '@chakra-ui/react';

import brandLogo from '@/assets/logo.png';

export const Logo = (props: ImageProps) => {
  return <Image src={brandLogo} {...props} />;
};
