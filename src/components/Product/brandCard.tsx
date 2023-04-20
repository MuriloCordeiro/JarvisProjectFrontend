import { Flex, Img, Text } from "@chakra-ui/react";

interface BrandCardProps {
  img?: string;
  name?: string;
  models?: string;
}

export default function BrandCard({ img, name, models }: BrandCardProps) {
  return (
    // ----card com a marca e modelo-------
    <Flex w={"full"} alignItems={"center"} h={"30px"}>
      <Img mr={"10px"} maxH={"35px"} objectFit={"contain"} src={img} />
      <Text fontWeight={"600"} mr={"10px"}>
        {name}:
      </Text>
      <Text>{models}</Text>
    </Flex>
  );
}
