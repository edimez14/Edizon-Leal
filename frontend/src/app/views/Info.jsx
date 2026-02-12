import { VStack, For } from "@chakra-ui/react";
import Heading from "../components/Heading";
import InfoDetail from "../components/InfoDetail";
import Modals from "../components/Modals";

export default function Info({
  title,
  info,
  view_link = false,
  is_p = true,
  is_project = false,
  projects_data = [],
}) {
  return (
    <VStack align="start" className="flex flex-col gap-2 my-2 py-4" w="full">
      <Heading text={title} />

      <VStack align="start" w="full" spacing={4}>
        {/* Implementación estricta de <For /> de Chakra UI v3 */}
        <For each={info}>
          {(item, index) => {
            const content = (
              <InfoDetail
                key={index}
                info={item}
                view_link={view_link}
                is_p={is_p}
              />
            );

            // Lógica de modal para proyectos
            if (is_project && projects_data && projects_data[index]) {
              return (
                <Modals
                  key={index}
                  view={content}
                  project={projects_data[index]}
                />
              );
            }

            return content;
          }}
        </For>
      </VStack>
    </VStack>
  );
}
