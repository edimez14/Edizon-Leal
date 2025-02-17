import { Flex, HStack, VStack, Text, For, Badge } from "@chakra-ui/react";
import { Spacer } from "@heroui/react";
import Image from "next/image";

import IconBadge from "./IconBadge";
import IconButton from "./IconButton";
import Links from "./Links";
import DynamicIcon from "./DynamicIcon";

export default function InfoDetail({ info, view_link = false, is_p = true }) {
  const d = [
    { name: 'FaLink', url: info.url },
    { name: 'FaGithub', url: info.github }
  ];

  return (
    <Flex direction={["column-reverse", "row"]} className="my-2 py-1">
      <HStack align={"start"}>
        <IconBadge icon={info.icon} radius="xl" padding={3} />
        <VStack align={"start"}>
          <HStack align={"start"} className="gap-2">
            <Text className="text-xl" fontWeight="bold">
              {info.title}
            </Text>
            {
              !view_link ? <p></p> : <Links dict={d} />
            }
          </HStack>
          <Text>{info.subtitle}</Text>
          <Text textStyle="sm" className="">
            {info.description}
          </Text>
          {
            !info.technologies ? <p></p> : (
              <Flex wrap="wrap" gap="2" className="p-2" >
                <For each={info.technologies}>
                  {(technology, index) => (
                    <Badge key={index} className="p-2 text-gray-400">
                      <DynamicIcon icon={technology.icon} /> <Text>{technology.name}</Text>
                    </Badge>
                  )}
                </For>
              </Flex>
            )
          }
        </VStack>
      </HStack>
      {
        info.image === "" ? <p></p> : (
          <Image
            src={info.image}
            alt=""
            width={400}
            height={200}
            style={{
              // objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        )
      }
      {
        is_p ? <p></p> : (
          <>
            <VStack align="end">
              {
                info.date === "" ? <p></p> : (
                  <Badge>
                    {info.date}
                  </Badge>
                )
              }
              {
                info.certificate === "" ? <p></p> : (
                  <IconButton
                    icon={"IoShieldCheckmark"}
                    url={info.certificate}
                    solid={true}
                    size='lg'
                    onlyIcon={true}
                  />
                )
              }
            </VStack>
          </>
        )
      }
    </Flex>
  );
}
