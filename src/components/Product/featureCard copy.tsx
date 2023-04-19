import { Flex, Img, Text } from "@chakra-ui/react";

interface BrandCardProps {
  img?: string;
  name?: string;
}

export default function FeatureCard({ img, name }: BrandCardProps) {
  return (
    // ----card com a marca e modelo-------
    <Flex
      w={"120px"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      fontSize={"text3"}
      color={"pf-black.light1"}
      lineHeight={"12px"}
      mr={"10px"}
    >
      <Flex w={"full"} h={"40px"} mb={"5px"} justifyContent={"center"}>
        <Img h={"100%"} src={img} />
      </Flex>
      <Flex h={"30px"} alignItems={"center"}>
        <Text maxW={"70px"}>{name}</Text>
      </Flex>
    </Flex>
  );
}
