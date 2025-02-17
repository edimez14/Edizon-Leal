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

import DynamicIcon from "@/app/components/DynamicIcon";
import Heading from "@/app/components/Heading";
import Links from "@/app/components/Links";

export default function Modals({ view, project }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const d = [
        { name: 'FaLink', url: project.url.link },
        { name: 'FaGithub', url: project.url.github }
    ];

    return (
        <>
            <Box
                onClick={onOpen}
                cursor="pointer"
                borderRadius="md"
            >
                {view}
            </Box>
            <Modal isOpen={isOpen} size={"4xl"} onOpenChange={onOpenChange} scrollBehavior={"inside"}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <Heading text={project.title} isH1={true} />
                                <Heading text={project.subtitle} />
                                <Flex wrap="wrap" gap="1" className="p-1">
                                    <For each={project.technology}>
                                        {(technology, index) => (
                                            <Badge key={index} className="p-1">
                                                <DynamicIcon icon={technology.icon} size="sm" />{" "}
                                                <Text>{technology.texto}</Text>
                                            </Badge>
                                        )}
                                    </For>
                                </Flex>
                            </ModalHeader>
                            <ModalBody>
                                <ReactMarkdown>{project.content}</ReactMarkdown>
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