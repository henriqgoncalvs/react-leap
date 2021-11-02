import { IconButton } from '@chakra-ui/button';
import { Box, Heading, HStack, SimpleGrid } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { css } from '@emotion/react';
import { cloneElement, JSXElementConstructor, useRef } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as LC from '@/components/LC';

export interface CarouselProps<T> {
  data: T[];
  columns: number;
  title?: string;
  keyProp: string;
  keysToPass: string[];
  CarouselItem: JSXElementConstructor<unknown>;
  carouselItemProps?: Record<string, unknown>;
  cardSize?: 'sm' | 'md';
  [x: string]: any;
}

export const Carousel = <T extends unknown>({
  data,
  columns = 3,
  title,
  keyProp = 'id',
  keysToPass,
  CarouselItem,
  carouselItemProps,
  cardSize = 'md',
  ...restProps
}: CarouselProps<T>) => {
  const columnsResponsive = useBreakpointValue({
    base: cardSize === 'md' ? 1 : 2,
    md: cardSize === 'md' ? 2 : 3,
    lg: cardSize === 'md' ? 3 : 4,
    xl: columns,
  });

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <LC.Vertical spacing={30} mt={50}>
      <HStack
        w="100%"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
        spacing={0}
      >
        {title && (
          <Heading fontSize="2xl" mb={{ base: 5, lg: 0 }} flex={1} textAlign="left" width="100%">
            {title}
          </Heading>
        )}

        {columnsResponsive && data.length > columnsResponsive && (
          <HStack w="100%" justifyContent="flex-end" flex={1}>
            <IconButton icon={<BsArrowLeft color="black" />} ref={prevRef} aria-label="Voltar" />
            <IconButton icon={<BsArrowRight color="black" />} ref={nextRef} aria-label="Avançar" />
          </HStack>
        )}
      </HStack>

      {columnsResponsive && data.length > columnsResponsive ? (
        <Box
          w="100%"
          as={Swiper}
          navigation={{
            prevEl: prevRef.current ? prevRef.current : undefined,
            nextEl: nextRef.current ? nextRef.current : undefined,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop
          spaceBetween={24}
          pb={10}
          slidesPerView={columnsResponsive}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          css={css`
            .swiper-button-next,
            .swiper-button-prev {
              display: none;
            }

            @media (max-width: 500px) {
              .swiper-slide {
                padding-right: 10px !important;
              }
            }
          `}
          {...restProps}
        >
          {data?.map((item) => (
            <SwiperSlide key={item[keyProp]}>
              {cloneElement(<CarouselItem />, {
                ...carouselItemProps,
                ...keysToPass.reduce((acc, obj) => ({ ...acc, [obj]: item[obj] }), {}),
              })}
            </SwiperSlide>
          ))}
        </Box>
      ) : (
        <SimpleGrid columns={columnsResponsive} gap={6}>
          {data?.map((item) =>
            cloneElement(<CarouselItem />, {
              id: item[keyProp],
              ...carouselItemProps,
              ...keysToPass.reduce((acc, obj) => ({ ...acc, [obj]: item[obj] }), {}),
            }),
          )}
        </SimpleGrid>
      )}
    </LC.Vertical>
  );
};
