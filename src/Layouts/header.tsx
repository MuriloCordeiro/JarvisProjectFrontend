import { Flex, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex bgColor="red" h="55px" p="1rem" align="center" px="10rem">
      <Text color="pf-green.main" textStyle="Header3">
        Bem-vindoss
      </Text>
    </Flex>
  );
}
