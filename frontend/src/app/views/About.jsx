import Heading from "../components/Heading";
import { VStack } from "@chakra-ui/react"
import { Text, Box } from "@chakra-ui/react"

export default function About({ description = "", is_es = false, align = "start" }) {
  return (
    <Box className="flex flex-col gap-2">
      <Heading text={!is_es ? "About me" : "Sobre mi"} />
      <Text textAlign={align}>{description}</Text>
    </Box>
  )
}

