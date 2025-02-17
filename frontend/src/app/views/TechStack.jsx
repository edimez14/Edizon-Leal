'use client';
import { Badge, Flex, For, Text, Box } from "@chakra-ui/react";

import { Technology } from "../utils/data";

import Heading from "../components/Heading";
import DynamicIcon from "../components/DynamicIcon";

export default function TechStack({ technologies, is_es = false }) {
  return (
    <Box className="flex flex-col gap-2">
      <Heading text={!is_es ? "Technologies" : "Tecnologias"} />
      <Flex wrap="wrap" gap="2" className="p-2" >
        <For each={technologies}>
          {(technology, index) => (
            <Badge key={index} className="p-2">
              <DynamicIcon icon={technology.icon} /> <Text>{technology.name}</Text>
            </Badge>
          )}
        </For>
      </Flex>
    </Box>
  );
}
