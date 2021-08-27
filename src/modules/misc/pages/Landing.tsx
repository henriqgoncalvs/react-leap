import { Button, Box, Heading, Text } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { Head } from '@/components/Head';
import * as LC from '@/components/LC';

export const Landing = () => {
  return (
    <>
      <Head description="Welcome to React Leap 🚀👩‍🚀" />
      <LC.Vertical color="black" minH="100vh" px="8" center>
        {/* <LC.Vertical spacing={20} bg="teal.100">
          <Image src={reactLeapBanner} />
        </LC.Vertical> */}

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

        <Box
          w={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          textAlign={{ base: 'left', md: 'center' }}
        >
          <Heading
            as="h2"
            mb={6}
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="bold"
            lineHeight="shorter"
            letterSpacing={{ base: 'normal', md: 'tight' }}
          >
            The project that&apos;s one small step for developers, one giant{' '}
            <Text
              display={{ base: 'block', lg: 'inline' }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, #C6009E, #530099)"
              fontWeight="extrabold"
              fontStyle="italic"
            >
              leap
            </Text>{' '}
            <span role="img" aria-labelledby="Rocket Emoji">
              🚀
            </span>{' '}
            for Loomi.
          </Heading>
          <LC.Horizontal mt={20} spacing={20} center>
            <Button
              as={Link}
              to="/auth/login"
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
              colorScheme="gray"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: 'full', sm: 'auto' }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              rightIcon={<AiFillGithub />}
              cursor="pointer"
            >
              See Github
            </Button>
          </LC.Horizontal>
        </Box>
      </LC.Vertical>
    </>
  );
};
