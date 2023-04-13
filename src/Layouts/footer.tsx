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
      <Flex>
        <Img src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/contact.png" />
      </Flex>
      {/* <Flex
        p="1rem"
        borderRadius="60px"
        bgColor="green"
        w="33%"
        position="absolute"
        bottom="3.5rem"
        h="90px"
        justify="center"
        align="end"
        direction="column"
      >
        <Text color="white" fontWeight="bold">
          TELEVENDAS (41) 4042-1100
        </Text>
        <Text color="white">
          vendas@pneufree.com.br | Dias úteis das 7h às 19h.
        </Text>
      </Flex> */}
      <Flex px="20rem" bgColor="#ECECEC" py="2.5rem" justify="space-between">
        <Flex direction="column">
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
        <Flex direction="column">
          <Text mb="1rem" fontSize="16px">
            PROTEÇÃO
          </Text>
          <Text>Quem Somos</Text>
          <Text>Nossas Marcas</Text>
          <Text>Seja um Credenciado</Text>
          <Text>Central de Ajuda</Text>
          <Text>Blog</Text>
        </Flex>

        <Flex direction="column">
          <Text mb="1rem" fontSize="16px">
            BUSCA LÁ
          </Text>
          <Wrap spacing="5px" w="100px">
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
        <Flex direction="column">
          <Text mb="1rem" fontSize="16px">
            PAGUE COM
          </Text>
          <Wrap spacing="5px" w="180px">
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
        <Flex direction="column" align="center">
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
        {/* <Img
        zIndex={4}
        bottom="1rem"
        position="absolute"
        src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/PFLOGO.png"
      /> */}
      </Flex>
    </>
  );
}
