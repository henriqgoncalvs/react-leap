import { Image, ImageProps } from '@chakra-ui/react';

import brandLogoCollapsed from '@/assets/logo-collapsed.png';

export const LogoCollapsed = (props: ImageProps) => {
  return <Image src={brandLogoCollapsed} {...props} />;
};
