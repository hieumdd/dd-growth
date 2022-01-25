import React from 'react';
import Image from 'next/image';
import {
    VStack,
    Stack,
    Flex,
    Heading,
    Button,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

const Harness = () => (
    <VStack
        align={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}
        flex="1 0 calc(50% - 1rem)"
        spacing={{ base: '1rem', md: '2rem' }}
    >
        <Heading as="h2" fontSize="4rem">
            Harness the power of <strong>BigQuery</strong>
        </Heading>
        <Heading as="h3" fontSize="1.25rem" fontWeight="400">
            Our Data Pipeline service uses Google BigQuery to process, transform
            and store your big data.
        </Heading>
        <List>
            <ListItem>
                <ListIcon as={FaUserCircle} />
                Unify data from all of marketing + sales platforms into one
                BigQuery Warehouse
            </ListItem>
            <ListItem>
                <ListIcon as={FaUserCircle} />
                Unify data from all of marketing + sales platforms into one
                BigQuery Warehouse
            </ListItem>
            <ListItem>
                <ListIcon as={FaUserCircle} />
                Unify data from all of marketing + sales platforms into one
                BigQuery Warehouse
            </ListItem>
        </List>
        <Button to="#about" colorScheme="blue" leftIcon={<FaUserCircle />}>
            About me
        </Button>
    </VStack>
);

const BigQuery = () => (
    <Stack direction={{ base: 'column-reverse', md: 'row' }} py="4rem">
        <Harness />
        <Flex flex="1 0 calc(50% - 1rem)" py="2rem" px="8rem">
            <Image
                src="/svg/google_bigquery-icon.svg"
                alt="123"
                width="1000"
                height="1000"
            />
        </Flex>
    </Stack>
);

export default BigQuery;
