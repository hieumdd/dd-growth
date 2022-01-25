import React from 'react';
import { VStack, Stack, Flex, Heading, Button } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

import Scenes03 from '../../public/svg/Scenes03.svg';

const CTA = () => (
    <VStack
        align={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}
        flex="1 0 50%"
        spacing={{ base: '1rem', md: '2rem' }}
    >
        <Heading as="h1" fontSize="4rem">
            How about certainty in uncertain time?
        </Heading>
        <Heading as="h2" fontSize="1.25rem" fontWeight="400">
            Advanced Product, Customer Behaviour and Marketing Analytics.
            <br />
            Acting as your Data Driven Consulting Partners in the era of too
            much data.
        </Heading>
        <Button to="#about" colorScheme="blue" leftIcon={<FaUserCircle />}>
            About me
        </Button>
    </VStack>
);

const Hero = () => (
    <Stack
        align="center"
        direction={{ base: 'column-reverse', md: 'row' }}
        justify={{
            base: 'center',
            md: 'space-between',
        }}
        spacing={['2.5vh', '10vh']}
    >
        <CTA />
        <Flex flex="0 1 50%">
            <Scenes03 />
        </Flex>
    </Stack>
);

export default Hero;
