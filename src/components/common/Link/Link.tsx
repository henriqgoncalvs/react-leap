import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

type LinkProps =
  | Omit<RouterLinkProps, 'to'> & {
      to: string;
      children: string | React.ReactNode;
    };

export const Link = ({ to, children, ...restProps }: LinkProps) => {
  return (
    <ChakraLink as={RouterLink} to={to} {...(restProps as any)}>
      {children}
    </ChakraLink>
  );
};
