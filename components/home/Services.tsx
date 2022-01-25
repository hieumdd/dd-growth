import React from 'react';
import { VStack, Stack, Flex, Heading, Text } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
import { IconType } from 'react-icons';

type ServiceProp = {
    Icon: any;
    title: string;
    desc: string;
};

const services: ServiceProp[] = [
    {
        Icon: FaUserCircle,
        title: 'Ecommerce Analytics',
        desc: `In eCommerce Analytics process we do customer behaviour and product analysis to convert and retain segments that power your growth, while simultaneously looking for sub-performing segments and how to engage them.`,
    },
    {
        Icon: FaUserCircle,
        title: 'Ecommerce Analytics',
        desc: `In eCommerce Analytics process we do customer behaviour and product analysis to convert and retain segments that power your growth, while simultaneously looking for sub-performing segments and how to engage them.`,
    },
    {
        Icon: FaUserCircle,
        title: 'Ecommerce Analytics',
        desc: `In eCommerce Analytics process we do customer behaviour and product analysis to convert and retain segments that power your growth, while simultaneously looking for sub-performing segments and how to engage them.`,
    },
];

const ServiceCard = ({ Icon, title, desc }: ServiceProp) => (
    <VStack
        alignItems={{ base: 'center', md: 'flex-start' }}
        className="shadow"
        p="2rem"
    >
        <Icon size="2rem" />
        <Heading
            as="h3"
            fontSize="1.5rem"
            textAlign={{ base: 'center', md: 'left' }}
        >
            {title}
        </Heading>
        <Text textAlign={{ base: 'center', md: 'left' }}>{desc}</Text>
    </VStack>
);

const Services = () => (
    <VStack spacing="2rem">
        <Heading as="h2" fontSize="2rem">
            What services do we provide as a Data analytics consulting agency?
        </Heading>
        <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: '1rem', md: '2rem' }}
        >
            {services.map(({ Icon, title, desc }, i) => (
                <ServiceCard key={i} Icon={Icon} title={title} desc={desc} />
            ))}
        </Stack>
    </VStack>
);

export default Services;
