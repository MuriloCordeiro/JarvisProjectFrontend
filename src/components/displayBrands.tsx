import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { api } from "../services/api";
import { useState } from "react";

export function DisplayBrands() {
  return (
    <>
      <Flex px="20rem" direction="column" py="2.5rem" bgColor="#F7F5F6">
        <Text fontWeight="bold" fontSize="18px">
          Trabalhamos com marcas com excelentes avaliações
        </Text>
      </Flex>
    </>
  );
}
