import { Flex, Input, Button, Text } from "@chakra-ui/react";

export default function SearchByRim() {
  return (
    <Flex
      h="100px"
      bgColor="pf-white.light1"
      px="15rem"
      justify="center"
      align="center"
    >
      <Flex direction="column" mr="1rem">
        <Text>BUSQUE PNEUS</Text>
        <Text>
          POR <b>ARO</b>
        </Text>
      </Flex>

      <Input w="120px" mr="1rem" />
      <Input w="120px" mr="1rem" />
      <Input w="120px" mr="1rem" />
      <Button variant="primary-button" w="200px">
        Pesquisar
      </Button>
    </Flex>
  );
}
