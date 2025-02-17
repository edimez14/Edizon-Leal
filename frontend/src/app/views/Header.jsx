'use client'
import { useState } from 'react';
import Image from 'next/image';

import { Flex, VStack, Box, Text } from "@chakra-ui/react";

import { Data } from "@/app/utils/data"

import Heading from "../components/Heading";
import Medias from "../components/Media";
import DynamicIcon from "../components/DynamicIcon";

export default function Header({ data }) {
  const [dataHeader, setDataHeader] = useState(data);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      gap={6}
      w="full"
      // maxW="1200px"
      mx="auto"
      p={4}
    >
      <Box
        flex={{ md: 1 }}
        maxW={{ base: "300px", md: "400px" }}
        w="full"
        position="relative"
        aspectRatio={3 / 4}
      >
        <Image
          src={dataHeader.avatar}
          alt="Photo of Edizon Leal"
          fill
          sizes="(max-width: 768px) 90vw, 400px"
          className="object-cover rounded-lg"
          priority
        />
      </Box>
      <Box
        flex={2}
        w="full"
        px={{ base: 2, md: 8 }}
        py={{ base: 4, md: 12 }}
      >
        <VStack align="start" spacing={6} >
          <Heading text={dataHeader.name} isH1={true} />
          <Heading text={dataHeader.skill} />

          <Flex align="center" gap={2}>
            <DynamicIcon icon="FiMapPin" size={24} />
            <Text fontSize="lg">{dataHeader.location}</Text>
          </Flex>

          <Medias data={dataHeader.media} />
        </VStack>
      </Box>
    </Flex>
  );
}
