import Link from "next/link";
import { Button } from "@heroui/react";
import DynamicIcon from "./DynamicIcon";
import { HStack } from "@chakra-ui/react";

export default function IconButton({ icon, url, size = 'md', text = "", solid = false, is_t = true, onlyIcon = false }) {
    return (
        <Button
            as={Link}
            href={url || "#"}
            variant={solid ? "solid" : "ghost"}
            target={is_t ? "_blank" : "_self"}
            rel="noopener noreferrer"
            passHref
            isIconOnly={onlyIcon}
        >
            <HStack>
                <DynamicIcon icon={icon} size={size} />
                {text}
            </HStack>
        </Button>
    );
}