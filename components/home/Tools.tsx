import React from 'react';
import { VStack, Wrap, WrapItem, Heading, Text } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

type ToolProp = {
    Icon: any;
    title: string;
    desc: string;
};

const tools: ToolProp[] = [
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

const ToolCard = ({ Icon, title, desc }: ToolProp) => (
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

const Tools = () => (
    <VStack spacing="2rem">
        <Heading as="h2" fontSize="2rem">
            Tools ToolsToolsToolsToolsToolsToolsToolsToolsTools
        </Heading>
        <Wrap
            wrap="wrap"
            alignContent="space-around"
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: '1rem', md: '2rem' }}
        >
            {tools.map(({ Icon, title, desc }, i) => (
                <WrapItem key={i} flex="1 0 calc(33% - 2rem)">
                    <ToolCard Icon={Icon} title={title} desc={desc} />
                </WrapItem>
            ))}
        </Wrap>
    </VStack>
);

export default Tools;
