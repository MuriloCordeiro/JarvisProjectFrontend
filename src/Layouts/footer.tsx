import {
  Flex,
  Text,
  Img,
  Input,
  useBreakpointValue,
  Center,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function Footer() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    medium: true,
    large: false,
    xl: true,
  });
  return (
    <>
      {/* --------box-tele-desk--------- */}
      <Flex
        display={["none", "none", "flex"]}
        mb={"-40px"}
        w={"full"}
        alignItems={"center"}
        px={["1rem", "4rem", "1rem", "2rem", "5rem", "12rem"]}
        justifyContent={"space-between"}
      >
        <Flex
          mr={"5px"}
          bgColor={"pf-green.main"}
          w={["580px", "580px", "400px", "480px", "480px", "460px", "580px"]}
          h={"90px"}
          alignItems={"center"}
          borderRadius={"50px"}
          justifyContent={"center"}
        >
          <Img
            mt={["0px", "0px", "-12px", "-12px", "-12px", "-12px", "-12px"]}
            maxW={[
              "580px",
              "580px",
              "180px",
              "180px",
              "180px",
              "170px",
              "170px",
            ]}
            src="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/pneu-ico.png"
          />
          <Flex
            flexWrap={"wrap"}
            flexDir={[
              "column",
              "column",
              "column",
              "column",
              "column",
              "column",
              "row",
            ]}
          >
            <Text
              color={"pf-white.main"}
              fontSize={"title"}
              fontWeight={"bold"}
              mr={"10px"}
            >
              TELEVENDAS
            </Text>
            <Text
              color={"pf-white.main"}
              fontSize={"title"}
              fontWeight={"bold"}
            >
              (41) 4042-1100
            </Text>
          </Flex>
        </Flex>
        <Flex
          ml={"5px"}
          bgColor={"pf-black.light1"}
          w={["580px", "580px", "400px", "480px", "480px", "460px", "580px"]}
          h={"90px"}
          borderRadius={"50px"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex>
            <Img
              mr={"10px"}
              src={
                "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/chat-ico.svg"
              }
            />
            <Text color={"pf-white.main"} fontSize={"title"}>
              PÓS-VENDAS{" "}
              <span style={{ fontWeight: "bold" }}>(41) 4042-1212</span>
            </Text>
          </Flex>
          <Text color={"pf-white.main"}>
            Dias úteis das 8h às 18h. | sac@pneufree.com.br
          </Text>
        </Flex>
      </Flex>

      {/* --------box-tele-mobile--------- */}
      <Flex
        display={["flex", "flex", "none"]}
        w={"full"}
        alignItems={"center"}
        px={["1rem", "4rem", "1rem", "2rem", "5rem", "12rem"]}
        flexDirection={"column"}
      >
        <Flex
          bgColor={"pf-green.main"}
          w={"full"}
          minH={"90px"}
          h={"auto"}
          alignItems={"center"}
          borderRadius={"10px"}
          justifyContent={"center"}
          mb={"20px"}
        >
          <Img
            mt={"-5px"}
            src="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/pneu-ico.png"
          />
          <Flex flexDir={"column"} alignItems={"center"}>
            <Text color={"pf-white.main"} fontSize={"title"} fontWeight={"600"}>
              TELEVENDAS
            </Text>
            <Flex
              bgColor={"pf-white.main"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"20px"}
              h={"40px"}
              px={"20px"}
            >
              <Text color={"pf-black.light1"} fontWeight={"600"}>
                (41) 4042-1100
              </Text>
            </Flex>
            <Text color={"pf-white.main"}>Dias úteis das 7h às 19h.</Text>
          </Flex>
        </Flex>
        <Flex
          bgColor={"pf-black.light2"}
          w={"full"}
          minH={"90px"}
          h={"auto"}
          alignItems={"center"}
          borderRadius={"10px"}
          justifyContent={"center"}
          padding={"15px"}
          mb={"20px"}
          flexDir={"column"}
        >
          <Flex w={"full"} mb={"10px"}>
            <Img
              mr={"10px"}
              src={
                "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/cart-ico-mob.svg"
              }
            />
            <Text>PÓS-VENDAS</Text>
          </Flex>
          <Flex w={"full"} alignItems={"center"}>
            <Flex
              bgColor={"pf-white.main"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"20px"}
              h={"40px"}
              px={"20px"}
            >
              <Text color={"pf-black.light1"} fontWeight={"600"}>
                (41) 4042-1100
              </Text>
            </Flex>
            <Flex flexDir={"column"} ml={"10px"}>
              <Text>Dias úteis das 8h às 18h.</Text>
              <Text>sac@pneufree.com.br</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        px={["1rem", "4rem", "1rem", "2rem", "5rem", "12rem"]}
        bgColor="#ECECEC"
        pt={["50px", "50px", "100px"]}
        justify="space-between"
        h={["center", "center", "345px"]}
        flexDir={["column", "column", "row"]}
        alignItems={["center", "center", "flex-start"]}
      >
        {/* -------links-desktop----------- */}
        <Flex direction="column" display={["none", "none", "flex"]}>
          <Img
            src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/footerLogo.png"
            mb="1rem"
          />
          <Text>Quem Somos</Text>
          <Text>Nossas Marcas</Text>
          <Text>Seja um Credenciado</Text>
          <Text>Central de Ajuda</Text>
          <Text>Blog</Text>
        </Flex>
        <Flex direction="column" display={["none", "none", "flex"]}>
          <Text mb="1rem" fontSize="16px">
            PROTEÇÃO
          </Text>
          <Text>Quem Somos</Text>
          <Text>Nossas Marcas</Text>
          <Text>Seja um Credenciado</Text>
          <Text>Central de Ajuda</Text>
          <Text>Blog</Text>
        </Flex>

        {/* -------links-mobile----------- */}
        <Flex
          display={["flex", "flex", "none"]}
          justifyContent={"space-between"}
          w={"full"}
        >
          <Flex direction="column">
            <Img
              src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/footerLogo.png"
              mb="1rem"
              maxW={"160px"}
            />
            <Text>Quem Somos</Text>
            <Text>Nossas Marcas</Text>
            <Text>Seja um Credenciado</Text>
            <Text>Central de Ajuda</Text>
            <Text>Blog</Text>
          </Flex>
          <Flex direction="column">
            <Text mb="1rem" fontSize="16px" fontWeight={"600"}>
              PROTEÇÃO
            </Text>
            <Text>Quem Somos</Text>
            <Text>Nossas Marcas</Text>
            <Text>Seja um Credenciado</Text>
            <Text>Central de Ajuda</Text>
            <Text>Blog</Text>
          </Flex>
        </Flex>

        {/* -------redes-sociais------- */}
        <Flex
          mt={["45px", "45px", "0px"]}
          direction="column"
          alignItems={["center", "center", "flex-start"]}
        >
          <Text mb="1rem" fontSize="16px">
            BUSCA LÁ 👇🏼
          </Text>
          <Wrap spacing="5px" w={["full", "full", "100px"]}>
            <WrapItem>
              <Img
                w="40px"
                src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/facebookicon.svg"
              />
            </WrapItem>
            <WrapItem>
              <Img
                w="40px"
                src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/instagramicon.svg"
              />
            </WrapItem>
            <WrapItem>
              <Img
                w="40px"
                src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/tiktokicon.svg"
              />
            </WrapItem>
            <WrapItem>
              <Img
                w="40px"
                src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/youtubeicon.svg"
              />
            </WrapItem>
          </Wrap>
        </Flex>

        {/* ----------pagamento----------- */}
        <Flex
          mt={["45px", "45px", "0px"]}
          direction="column"
          alignItems={["center", "center", "flex-start"]}
        >
          <Text mb="1rem" fontSize="16px">
            PAGUE COM
          </Text>
          <Wrap spacing="5px" w={["full", "full", "180px"]}>
            <WrapItem>
              <Img
                w="40px"
                src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/americanicon.svg"
              />
            </WrapItem>
            <WrapItem>
              <Img
                w="40px"
                src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/boletoicon.svg"
              />
            </WrapItem>
            <WrapItem>
              <Img
                w="40px"
                src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/eloicon.svg"
              />
            </WrapItem>
            <WrapItem>
              <Img
                w="40px"
                src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/hipericon.svg"
              />
            </WrapItem>{" "}
            <WrapItem>
              <Img
                w="40px"
                src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/mastericon.svg"
              />
            </WrapItem>{" "}
            <WrapItem>
              <Img
                w="40px"
                src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/pixicon.svg"
              />
            </WrapItem>{" "}
            <WrapItem>
              <Img
                w="40px"
                src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/visaicon.svg"
              />
            </WrapItem>
          </Wrap>
        </Flex>

        {/* ----------selos---------------- */}
        <Flex
          w={["full", "full", "auto"]}
          mt={["45px", "45px", "0px"]}
          direction={["row", "row", "column"]}
          align="center"
          justifyContent={"space-between"}
          mb={["20px", "20px", "0px"]}
        >
          <Img
            mb="1rem"
            w="140px"
            src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/opinioesverificadasicon.svg"
          />
          <Img
            mb="1rem"
            w="140px"
            src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/lojaseguraicon.svg"
          />
          <Img
            w="60px"
            src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/abcomicon.svg"
          />
        </Flex>
      </Flex>

      {/* ---------info----cnpj--------- */}
      <Flex
        w={"full"}
        bgColor={"pf-black.light3"}
        minH={"50px"}
        h={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        padding={"15px"}
      >
        <Text color={"pf-white.main"} fontSize={"text1"}>
          Pneu Free do Brasil Comércio Eletrônico Ltda. CNPJ: 11.891.896/0001-62
          - Rua Dep. Heitor Alencar Furtado, 3350, 6º andar - 81200-528 -
          Curitiba - PR
        </Text>
      </Flex>
    </>
  );
}
