import { VStack, For } from "@chakra-ui/react";

import Heading from "../components/Heading";
import InfoDetail from "../components/InfoDetail";

export default function Info({ title, info, view_link = false, is_p = true }) {
  return (
    <VStack align="start" className="flex flex-col gap-2 my-2 py-4">
      <Heading text={title} />
      <VStack align="start">
        <For each={info} className="flex flex-col gap-2">
          {
            (item, index) => <InfoDetail key={index} info={item} view_link={view_link} is_p={is_p} />
          }
        </For>
      </VStack>
    </VStack>
  );
}
