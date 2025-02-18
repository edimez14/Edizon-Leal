// Project.jsx
'use client';
import { useEffect, useState } from "react";
import { SimpleGrid, For, VStack } from "@chakra-ui/react";
import Heading from "@/app/components/Heading";
import Modals from "../components/Modals";
import { CardDetail } from "../components/CardDetail";
import CreateProjectModal from "../components/CreateProjectModal";

export default function Project({ data, is_es = false }) {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(process.env.NEXT_PUBLIC_AUTH_ENABLED === "true");
    }, []);
    // console.log(isAuth);
    // console.log(process.env.NEXT_PUBLIC_AUTH_ENABLED);
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
                    !isAuth ? <p></p> : (
                        <CreateProjectModal lang={!is_es ? "en" : "es"} />
                    )
                }
            </SimpleGrid>
        </VStack>
    );
}