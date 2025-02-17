import { Text, VStack, Icon } from '@chakra-ui/react';

import DynamicIcon from '@/app/components/DynamicIcon';

export default function CardService({ service }) {
    return (
        <VStack align={"center"} paddingY={"32px"}>
            <Icon fontSize="5xl">
                <DynamicIcon icon={service.icon} />
            </Icon>
            <Text fontWeight="bold" as={"div"} textAlign={"center"} >{service.title}</Text>
            <Text as={"div"} textAlign={"center"} >{service.description}</Text>
        </VStack>
    );
}