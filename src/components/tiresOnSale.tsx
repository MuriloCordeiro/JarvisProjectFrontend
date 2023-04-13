import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { api } from "../services/api";
import { useState } from "react";

export function TiresOnSale() {
  return (
    <>
      <Flex px="20rem" direction="column" py="2.5rem" bgColor="#EEEEEE">
        <Text fontWeight="bold" fontSize="18px">
          Pneus em liquidação, aproveite!
        </Text>
        <Text fontWeight="bold" alignSelf="center">
          {" "}
          CAROUSEL SERÁ AQUI
        </Text>
        <Flex align="center" direction="column" mt="1rem">
          <Button borderRadius="20px" colorScheme="red">
            VER TODOS PNEUS EM LIQUIDAÇÃO
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
