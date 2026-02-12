// Modals.jsx
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Flex, For, Badge, Text, Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import Image from "next/image"; // Importante para optimización de imágenes

import DynamicIcon from "@/app/components/DynamicIcon";
import Heading from "@/app/components/Heading";
import Links from "@/app/components/Links";

export default function Modals({ view, project }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const d = [
    { name: "FaLink", url: project.url },
    { name: "FaGithub", url: project.github },
  ];

  const markdownContent = `
# Overview
${project.overview}

## Problem
${project.problem}

## Solution
${project.solution}

### My Role
${project.my_role}

### Key Features
${project.key_features ? project.key_features.map((f) => `- ${f}`).join("\n") : ""}
    `;

  return (
    <>
      <Box onClick={onOpen} cursor="pointer" borderRadius="md" w="full">
        {view}
      </Box>
      <Modal
        isOpen={isOpen}
        size={"4xl"}
        onOpenChange={onOpenChange}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <Heading text={project.title} isH1={true} />
                <Heading text={project.subtitle} />
                <Flex wrap="wrap" gap="1" className="p-1">
                  <For each={project.technologies}>
                    {(technology, index) => (
                      <Badge key={index} className="p-1">
                        <DynamicIcon icon={technology.icon} size="sm" />{" "}
                        <Text>{technology.name}</Text>
                      </Badge>
                    )}
                  </For>
                </Flex>
              </ModalHeader>
              <ModalBody>
                {/* Renderizado de la imagen del proyecto */}
                {project.image && (
                  <Box mb={6} overflow="hidden" borderRadius="lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={630}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                )}
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
              </ModalBody>
              <ModalFooter>
                <Links dict={d} />
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
