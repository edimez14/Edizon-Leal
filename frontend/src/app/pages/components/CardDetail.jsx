// CardDetail.jsx
import { Badge, Box, Card, Flex, Image, Text, For } from "@chakra-ui/react";

import DynamicIcon from "@/app/components/DynamicIcon";

export const CardDetail = ({ info }) => (
    <Card.Root flexDirection={"row"} overflow="hidden" size={"lg"} height={"10/12"} >
        <Box>
            <Card.Body>
                <Card.Title>{info.title || "title"}</Card.Title>
                <Card.Description>
                    {info.subtitle || "description"}
                </Card.Description>
                <Flex wrap="wrap" gap="1" className="p-1">
                    <For each={info?.technology ?? []}>
                        {(technology, index) => (
                            <Badge key={index} className="p-1">
                                <DynamicIcon icon={technology.icon} size="sm" />
                                <Text>{technology.texto}</Text>
                            </Badge>
                        )}
                    </For>
                </Flex>
                <Card.Footer>
                    <p></p>
                </Card.Footer>
            </Card.Body>
        </Box>
        <Image
            // objectFit="cover"
            maxW="200px"
            src={info.featured_image?.url || "https://www.bbc.com/mundo/vert-fut-50490320"}
            alt="image project"
        />
    </Card.Root>
);
