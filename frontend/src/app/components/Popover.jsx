import { For, VStack } from "@chakra-ui/react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";

import IconButton from "./IconButton";

export default function Popovers({ button, list_button }) {
    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button isIconOnly={true} >{button}</Button>
            </PopoverTrigger>
            <PopoverContent>
                <VStack>
                    <For each={list_button}>
                        {(item, index) => (
                            <IconButton
                                key={index}
                                icon={item.icon}
                                url={item.url}
                                text={item.text}
                                is_t={false}
                            />
                        )}
                    </For>
                </VStack>
            </PopoverContent>
        </Popover>
    );
}