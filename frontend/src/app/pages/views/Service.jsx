import { VStack, For, Flex } from '@chakra-ui/react';

import Heading from '@/app/components/Heading';

import CardService from '../components/CardService';

export default function Service({ services, is_es = false }) {
    return (
        <VStack>
            <Heading text={!is_es ? "Service" : "Servicios"} />
            <Heading text={!is_es ? "What can i do?" : "¿Qué puedo hacer?"} />
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                gap={6}
                w="full"
                // maxW="1200px"
                mx="auto"
                p={4}
            >
                <For each={services}>
                    {(service, index) => (
                        <CardService key={index} service={service} />
                    )}
                </For>
            </Flex>
        </VStack>
    );
}