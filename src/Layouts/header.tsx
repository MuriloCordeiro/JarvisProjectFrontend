import { Flex, Text, Img, Input, useBreakpointValue } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      {/* -------header-mobile------ */}
      <Flex
        h="70px"
        p="1rem"
        align="center"
        px={["1rem", "4rem", "1rem", "2rem", "5rem", "12rem"]}
        w="full"
        justify="space-between"
        display={["flex", "flex", "none"]}
      >
        <Img src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/PFLOGO.png" />

        <Flex alignItems={"center"} h={"full"}>
          <Img src="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/search-ico.svg" />

          <Img
            ml={"15px"}
            src="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/cart-ico.svg"
          />

          <Img
            ml={"15px"}
            src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Icons/hamburgmenu.svg"
          />
        </Flex>
      </Flex>

      {/* -------header-desktop------ */}
      <Flex
        transition={"1s"}
        h="70px"
        p="1rem"
        align="center"
        px={["1rem", "4rem", "1rem", "2rem", "5rem", "12rem"]}
        w="full"
        justify="space-between"
        display={["none", "none", "flex"]}
      >
        <Img
          transition={"1s"}
          maxW={["100px", "100px", "120px", "180px", "180px", "180px", "180px"]}
          src="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/logo.svg"
        />

        <Flex
          alignItems={"center"}
          border={"1px solid "}
          borderColor={"pf-grey.main"}
          borderRadius="20px"
          paddingRight={"10px"}
          transition={"1s"}
        >
          <Input
            placeholder="Pesquise por  pneu, marca, medida ou veículo..."
            w={["1rem", "200px", "250px", "320px", "350px", "300px", "400px"]}
            border={"none"}
          />
          <Img
            src={
              "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/search.svg"
            }
          />
        </Flex>

        <Flex alignItems={"center"}>
          <Flex mr={"15px"}>
            <Img
              src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Icons/myaccountIcon.svg"
              mr="0.5rem"
            />
            <Text fontWeight={"bold"}>Minha conta</Text>
          </Flex>
          <Flex mr={"15px"}>
            <Img
              src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Icons/phoneicon.svg"
              mr="0.5rem"
            />
            <Text fontWeight={"bold"}>(41) 4042-1100</Text>
          </Flex>
          <Img
            mr={"15px"}
            src="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/cart-ico.svg"
          />
          <Flex as="button">
            <Img src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Icons/hamburgmenu.svg" />
            <Text></Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
