import { Box, BoxProps } from '@chakra-ui/react';
import React, { UIEvent, useCallback, UIEventHandler } from 'react';

interface InfiniteScrollProps extends Omit<BoxProps, 'onScrollCapture'> {
  onEndReached: () => void;
  threshold?: number;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  threshold = 1.15,
  onEndReached,
  children,
  ...rest
}) => {
  const handleScrollCapture: UIEventHandler<HTMLDivElement> = useCallback(
    (e: UIEvent<HTMLDivElement>) => {
      if (
        e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
        threshold * e.currentTarget.clientHeight
      ) {
        onEndReached();
      }
    },
    [onEndReached, threshold],
  );

  return (
    <Box onScrollCapture={handleScrollCapture} {...rest}>
      {children}
    </Box>
  );
};

export { InfiniteScroll };
