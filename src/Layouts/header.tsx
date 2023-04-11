import { Flex, Text, Img, Input } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      h="70px"
      p="1rem"
      align="center"
      px="10rem"
      w="full"
      justify="space-between"
    >
      <Img src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/PFLOGO.png" />

      <Input placeholder="teste" borderRadius="20px" w="425px" />
      <Flex>
        <Img
          src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Icons/myaccountIcon.svg"
          mr="0.5rem"
        />
        <Text>Minha conta</Text>
      </Flex>
      <Flex>
        <Img
          src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Icons/phoneicon.svg"
          mr="0.5rem"
        />
        <Text>(41) 6666-6666</Text>
      </Flex>

      <Flex as="button">
        <Img src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Icons/hamburgmenu.svg" />
        <Text></Text>
      </Flex>
    </Flex>
  );
}
