// Project.jsx
import { SimpleGrid, For, VStack } from "@chakra-ui/react";
import Heading from "@/app/components/Heading";
import Modals from "../components/Modals";
import { CardDetail } from "../components/CardDetail";
import CreateProjectModal from "../components/CreateProjectModal";

export default function Project({ data, is_es = false, is_auth = true }) {
    return (
        <VStack>
            <Heading text={!is_es ? "Projects" : "Proyectos"} />
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} className="p-1">
                <For each={data || []}>
                    {(date, index) => (
                        <Modals key={index} view={<CardDetail info={date} />} project={date} />
                    )}
                </For>
                {
                    !is_auth ? <p></p> : (
                        <CreateProjectModal lang={!is_es ? "en" : "es"} />
                    )
                }
            </SimpleGrid>
        </VStack>
    );
}