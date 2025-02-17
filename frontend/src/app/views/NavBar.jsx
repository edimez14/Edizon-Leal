"use client";

import React from "react";
import { VStack } from "@chakra-ui/react";
// import { ColorModeButton } from "@/components/ui/color-mode";

import DynamicIcon from "../components/DynamicIcon";
import Popovers from "../components/Popover";
import ThemeToggle from "../components/ThemeToggle";

export default function NavBar({ is_es = false }) {

    const l_en = [
        { icon: 'IoLanguageSharp', url: "/", text: "English" },
        { icon: 'IoLanguageSharp', url: "/pages/es-pages/es", text: "Spanish" }
    ];

    const l_es = [
        { icon: 'IoLanguageSharp', url: "/", text: "Ingles" },
        { icon: 'IoLanguageSharp', url: "/pages/es-pages/es", text: "Español" }
    ];

    const p_en = [
        { icon: 'FaHome', url: "/", text: "Home" },
        { icon: 'GrServices', url: "/pages/en-pages/service", text: "Service" },
        { icon: 'GrProjects', url: "/pages/en-pages/projects", text: "Projects" }
    ];

    const p_es = [
        { icon: 'FaHome', url: "/pages/es-pages/es", text: "Inicio" },
        { icon: 'GrServices', url: "/pages/es-pages/service", text: "Servicios" },
        { icon: 'GrProjects', url: "/pages/es-pages/projects", text: "Proyectos" }
    ];

    return (
        <div
            style={{
                position: "fixed",
                top: "1rem",
                right: "1rem",
                display: "flex",
                gap: "1rem",
                zIndex: 1000
            }}
        >
            <VStack>
                {
                    !is_es ? (
                        <>
                            <Popovers button={<DynamicIcon icon={"FiHome"} />} list_button={p_en} />
                            <Popovers button={<DynamicIcon icon={"IoLanguageSharp"} />} list_button={l_en} />
                        </>
                    ) : (
                        <>
                            <Popovers button={<DynamicIcon icon={"FiHome"} />} list_button={p_es} />
                            <Popovers button={<DynamicIcon icon={"IoLanguageSharp"} />} list_button={l_es} />
                        </>
                    )
                }
                <ThemeToggle />
            </VStack>
        </div>
    );
}