/* eslint-disable jsx-a11y/accessible-emoji */
import { Button, Heading, Image, VisuallyHidden, Box, chakra } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Parallax from 'parallax-js';
import { useEffect, useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import detail1 from '@/assets/detail-1.png';
import detail2 from '@/assets/detail-2.png';
import detail3 from '@/assets/detail-3.png';
import detail4 from '@/assets/detail-4.png';
import landingBg from '@/assets/landing-bg.png';
import reactLeapLetter from '@/assets/react-leap-letter.png';
import { Head } from '@/components/Head';
import * as LC from '@/components/LC';

export const Landing = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <>
      <Head description="Welcome to React Leap 🚀👩‍🚀" />
      <LC.Vertical
        color="white"
        minH="100vh"
        px="8"
        center
        bgImage={landingBg}
        bgPosition="center"
        bgSize="cover"
      >
        <LC.Vertical pos="relative" zIndex="banner" center>
          <LC.Vertical mb={8}>
            <Image src={reactLeapLetter} alt="React Leap" maxW="md" />
          </LC.Vertical>

          <VisuallyHidden>
            <Heading
              as="h1"
              mb={6}
              fontSize={{ base: '4xl', md: '6xl' }}
              fontWeight="bold"
              lineHeight="shorter"
              letterSpacing={{ base: 'normal', md: 'tight' }}
            >
              React Leap
            </Heading>
          </VisuallyHidden>

          <LC.Vertical maxW="lg" textAlign={{ base: 'left', md: 'center' }}>
            <Heading
              as="h2"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="bold"
              lineHeight="shorter"
              letterSpacing={{ base: 'normal', md: 'tight' }}
            >
              Build your next great product{' '}
              <chakra.span role="img" aria-labelledby="Rocket Emoji" display="inline">
                🚀
              </chakra.span>
            </Heading>
            <LC.Horizontal mt={20} spacing={20} center>
              <Button
                as={Link}
                to="/login"
                variant="solid"
                colorScheme="brand"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: 'full', sm: 'auto' }}
                mb={{ base: 2, sm: 0 }}
                size="lg"
                rightIcon={<BsArrowRightShort />}
              >
                Get Started
              </Button>
              <Button
                as="a"
                href="https://github.com/henriqgoncalvs/react-leap"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: 'full', sm: 'auto' }}
                mb={{ base: 2, sm: 0 }}
                size="lg"
                rightIcon={<AiFillGithub />}
                cursor="pointer"
                variant="@secondary"
              >
                See Github
              </Button>
            </LC.Horizontal>
          </LC.Vertical>
        </LC.Vertical>

        <Box w="100%" h="100vh" position="absolute" ref={sceneEl} overflow="hidden">
          <Image
            data-depth="1"
            src={detail2}
            maxW="48"
            pos="absolute"
            css={css`
              left: 20% !important;
              top: 60% !important;
              right: auto !important;
            `}
          />
          <Image
            data-depth=".3"
            src={detail3}
            maxW="52"
            pos="absolute"
            css={css`
              top: 10% !important;
              left: 10% !important;
              bottom: auto !important;
              right: auto !important;
            `}
          />
          <Image
            data-depth="-0.8"
            src={detail4}
            maxW="52"
            pos="absolute"
            css={css`
              top: 20% !important;
              right: 8% !important;
              bottom: auto !important;
              left: auto !important;
            `}
          />
          <Image
            data-depth=".2"
            src={detail1}
            maxW="xs"
            pos="absolute"
            css={css`
              bottom: 10% !important;
              right: 12% !important;
              top: auto !important;
              left: auto !important;
            `}
          />
        </Box>
      </LC.Vertical>
    </>
  );
};
