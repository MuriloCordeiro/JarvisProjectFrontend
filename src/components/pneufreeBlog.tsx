import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { api } from "../services/api";
import { useState } from "react";

export function PneufreeBlog() {
  return (
    <>
      <Flex px="20rem" direction="column" py="2.5rem">
        <Text fontWeight="bold" fontSize="18px">
          Conteúdos Pneufree
        </Text>
      </Flex>
    </>
  );
}
