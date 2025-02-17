import { VStack, Text } from "@chakra-ui/react";

import Medias from "../components/Media";

export default function Footer({ data }) {
    return (
        <VStack align={"start"}>
            <Text>
                Edizon Leal
            </Text>
            <Medias data={data} />
        </VStack>
    );
}