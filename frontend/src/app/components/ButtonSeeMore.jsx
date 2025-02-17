'use client';

import Link from "next/link";

import { Button } from "@heroui/react";

export default function ButtonSeeMore({ is_es = false }) {
    return (
        <Link href={"#"}>
            <Button size="lg" variant="solid">
                {
                    !is_es ? "see more projects" : "Ver mas Proyectos"
                }
            </Button>
        </Link>
    )
}