import React from 'react';
import Image from 'next/image';
import { VStack, Stack, Flex, Heading, Button } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

const CTA = () => (
    <VStack
        align={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}
        flex="1 0 calc(50% - 1rem)"
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
    <Stack flex="0 0 100%" direction={{ base: 'column-reverse', md: 'row' }} py="4rem">
        <CTA />
        <Flex flex="1 0 calc(50% - 1rem)">
            <Image
                src="/svg/Scenes03.svg"
                alt="123"
                width="1000"
                height="100"
            />
        </Flex>
    </Stack>
);

export default Hero;
