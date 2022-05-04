import { Box, BoxProps } from '@chakra-ui/react';
import React, { useCallback } from 'react';

interface InfiniteScrollProps extends Omit<BoxProps, 'onScrollCapture'> {
  onEndReached: () => void;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ onEndReached, children, ...rest }) => {
  const handleScrollCapture = useCallback(
    (e: any) => {
      if (e.target.scrollHeight - e.target.scrollTop <= 1.15 * e.target.clientHeight) {
        onEndReached();
      }
    },
    [onEndReached],
  );

  return (
    <Box onScrollCapture={handleScrollCapture} {...rest}>
      {children}
    </Box>
  );
};

export { InfiniteScroll };
