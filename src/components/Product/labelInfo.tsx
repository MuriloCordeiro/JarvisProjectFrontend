import { Flex, Text } from "@chakra-ui/react";

interface LabelInfoProps {
  name?: string;
  text?: string;
}

export default function LabelInfo({ name, text }: LabelInfoProps) {
  return (
    // ----card com a marca e modelo-------
    <Flex flexDir={"column"} mb={"10px"}>
      <Text>{name}:</Text>
      <Text fontWeight={"600"}>{text}</Text>
    </Flex>
  );
}
