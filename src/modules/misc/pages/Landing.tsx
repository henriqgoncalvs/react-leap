/* eslint-disable jsx-a11y/accessible-emoji */
import { Button, Heading, Text, Image, VisuallyHidden, Box, chakra } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Parallax from 'parallax-js';
import { useEffect, useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import detailAstronaut from '@/assets/detail-astronaut.png';
import detailBallBlack from '@/assets/detail-ball-black.png';
import detailBallPink from '@/assets/detail-ball-pink.png';
import landingBg from '@/assets/landing-bg.png';
import reactLeapLetter from '@/assets/react-leap-letter.png';
import { Logo } from '@/components/common/Logo';
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
              The project that&apos;s one small step for developers, one giant{' '}
              <Text
                display="inline"
                w="full"
                bgClip="text"
                bgGradient="linear(to-r, #C6009E, #530099)"
                fontWeight="extrabold"
                fontStyle="italic"
              >
                leap
              </Text>{' '}
              <chakra.span role="img" aria-labelledby="Rocket Emoji" display="inline">
                🚀
              </chakra.span>{' '}
              for Loomi.
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
                href="https://github.com/loomi/react-leap"
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
            src={detailBallBlack}
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
            src={detailBallPink}
            maxW="lg"
            pos="absolute"
            css={css`
              top: -10% !important;
              left: 0% !important;
              bottom: auto !important;
              right: auto !important;
            `}
          />
          <Image
            data-depth="-0.8"
            src={detailBallPink}
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
            data-depth=".1"
            src={detailAstronaut}
            maxW="xs"
            pos="absolute"
            css={css`
              bottom: 30px !important;
              right: 0 !important;
              top: auto !important;
              left: auto !important;
            `}
          />
        </Box>
      </LC.Vertical>

      <Text
        color="white"
        fontWeight="medium"
        pos="absolute"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
      >
        Made with love{' '}
        <chakra.span role="img" aria-labelledby="Rocket Emoji" display="inline">
          💜
        </chakra.span>{' '}
        by <Logo maxW="12" display="inline" /> developers.
      </Text>
    </>
  );
};
