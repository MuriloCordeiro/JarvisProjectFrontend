import {
  Flex,
  Img,
  Text,
  Select,
  Input,
  Button,
  Grid,
  GridItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import Layout from "../../Layouts/layout";
import BrandCard from "../../components/Product/brandCard";
import FeatureCard from "../../components/Product/featureCard copy";
import LabelInfo from "../../components/Product/labelInfo";
import Rating, { ViewRatings } from "../../components/Rating/ratings";

export default function Product() {
  return (
    <>
      <Layout
        bgColor={"pf-grey.light1"}
        px={["1rem", "4rem", "1rem", "2rem", "4rem", "12rem"]}
        mb={"25px"}
        transition={"1s"}
      >
        {/* ------title-mobile------- */}
        <Flex
          display={["flex", "flex", "none"]}
          mt={"25px"}
          flexDir={"column"}
          alignItems={"center"}
          textAlign={"center"}
        >
          {/* ---Logo marca---- */}
          <Img
            src={
              "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/continentalpng.png"
            }
            maxH={"55px"}
            objectFit={"contain"}
          />

          {/* ---Nome produto---- */}
          <Text
            fontSize={"title"}
            fontWeight={"bold"}
            color={"pf-black.light3"}
            mb={"-10px"}
          >
            PNEU 205/55R16 91W
          </Text>
          {/* ---subtitulo produto---- */}
          <Text fontSize={"title"} color={"pf-black.light3"}>
            CONTIPREMIUMCONTACT SSR{" "}
            <span style={{ color: "#FF5353" }}>RUN FLAT</span>
          </Text>
        </Flex>

        {/* ---------Product-infos-geral------- */}
        <Flex
          w="full"
          h={"auto"}
          background={"pf-white.main"}
          borderRadius={"15px"}
          mt={"20px"}
          flexDir={["column", "column", "row"]}
          justifyContent={"space-between"}
          padding={["10px", "10px", "25px"]}
          boxShadow={"0px 2px 2px rgba(0, 0, 0, 0.15)"}
          transition={"1s"}
        >
          {/* ---------box-image---------- */}
          <Flex
            transition={"1s"}
            width={["100%", "100%", "50%", "50%", "55%", "55%"]}
            flexDir={"column"}
          >
            <Img
              src={
                "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/selo-mega-promo.png"
              }
              maxH={["70px", "70px", "100px"]}
              transition={"1s"}
              objectFit={"contain"}
              position={"absolute"}
              mt={"25px"}
              ml={["10px", "10px", "50px"]}
            />
            <Img
              src="/Image/pneu.png"
              w="full"
              maxH={"550px"}
              objectFit={"contain"}
            />
            <Flex w={"full"} h={"auto"} justifyContent={"center"}>
              <Flex
                w={"auto"}
                h={"60px"}
                borderRadius={"50px"}
                padding={"10px 20px 10px 20px"}
                bgColor={"pf-grey.light1"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Img
                  src={
                    "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/marcacao.svg"
                  }
                />
                <Flex flexDir={"column"} ml={"10px"}>
                  <Text>Marcação</Text>
                  <Flex alignItems={"center"} justifyContent={"center"}>
                    <Img
                      src={
                        "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/BMW.png"
                      }
                    />
                    <Text
                      ml={"2px"}
                      color={"pf-black.main"}
                      fontSize={["text1", "text1", "h4"]}
                      fontWeight={"600"}
                    >
                      BMW
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                ml={"10px"}
                mr={"10px"}
                w={"auto"}
                h={"60px"}
                borderRadius={"50px"}
                padding={"10px 20px 10px 20px"}
                bgColor={"pf-grey.light1"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Img
                  src={
                    "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/runflat.svg"
                  }
                />
                <Flex flexDir={"column"} ml={"10px"}>
                  <Text>Tipo</Text>
                  <Flex alignItems={"center"} justifyContent={"center"}>
                    <Text
                      ml={"2px"}
                      color={"pf-black.main"}
                      fontSize={"h4"}
                      fontWeight={"600"}
                    >
                      RUN FLAT
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          {/* -----box---info----- */}
          <Flex
            width={["100%", "100%", "50%", "50%", "45%", "45%"]}
            transition={"1s"}
            flexDir={"column"}
            alignItems={"flex-start"}
          >
            {/* -------nome-desktop--------- */}
            <Flex
              flexDir={"column"}
              alignItems={"flex-start"}
              display={["none", "none", "flex"]}
            >
              {/* ---Logo marca---- */}
              <Img
                src={
                  "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/continentalpng.png"
                }
                maxH={"55px"}
                objectFit={"contain"}
              />

              {/* ---Nome produto---- */}
              <Text
                fontSize={"titleBig"}
                fontWeight={"bold"}
                color={"pf-black.light3"}
                mb={"-10px"}
              >
                PNEU 205/55R16 91W
              </Text>

              {/* ---subtitulo produto---- */}
              <Text fontSize={"title"} color={"pf-black.light3"}>
                CONTIPREMIUMCONTACT SSR{" "}
                <span style={{ color: "#FF5353" }}>RUN FLAT</span>
              </Text>
            </Flex>

            {/* ---eqipamento original---- */}
            <Flex
              w={"full"}
              mt={"15px"}
              alignItems={"center"}
              color={"pf-black.light1"}
              justifyContent={["center", "center", "flex-start"]}
              transition={"1s"}
              fontSize={["text2", "text2", "text1"]}
            >
              <Text>EQUIPAMENTO ORIGINAL:</Text>
              <Img
                src={
                  "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/BMW.png"
                }
                mr={"5px"}
                ml={"5px"}
              />
              <Text mr={"5px"}>BMW</Text>
              <Text>116!,</Text>
              <Text>118i</Text>
              <Text>120!</Text>
            </Flex>

            {/* ---Avaliacao estrelas---- */}
            <Flex
              w={"full"}
              alignItems={"center"}
              mt={"5px"}
              flexDir={["column", "column", "row"]}
              justifyContent={["center", "center", "flex-start"]}
              transition={"1s"}
            >
              <Flex
                w={["full", "full", "50%"]}
                justifyContent={["center", "center", "flex-start"]}
                transition={"1s"}
              >
                <Rating TotalRatings={4} />
              </Flex>
              <Flex>
                <Img
                  src={
                    "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/car-ico.svg"
                  }
                  ml={"5px"}
                  mr={"5px"}
                />
                <Text>Passeio</Text>
              </Flex>
            </Flex>

            {/* ---Valor preço---- */}
            <Flex
              w={"full"}
              alignItems={"center"}
              flexDir={["column", "column", "row"]}
              transition={"1s"}
              justifyContent={["center", "center", "flex-start"]}
            >
              <Flex alignItems={"center"}>
                <Text fontSize={"h3"} fontWeight={"bold"}>
                  R$
                </Text>
                <Text fontSize={"priceTit"} fontWeight={"bold"}>
                  1.229
                </Text>
                <Text fontSize={"h3"} fontWeight={"bold"}>
                  ,00
                </Text>
              </Flex>
              <Text ml={"5px"}>
                unidade à vista no{" "}
                <span style={{ fontWeight: "bold" }}>PIX</span> ou{" "}
                <span style={{ fontWeight: "bold" }}>boleto</span>
              </Text>
            </Flex>

            {/* ---Quantidade---- */}
            <Flex
              w={"full"}
              mt={"0px"}
              alignItems={"center"}
              justifyContent={["center", "center", "flex-start"]}
              transition={"1s"}
            >
              <Select
                w={"120px"}
                borderRadius={"25px"}
                color={"pf-black.light1"}
                fontWeight={"600"}
                border={"solid 1px"}
                borderColor={"pf-grey.main"}
              >
                <option>4 PNEUS</option>
                <option>3 PNEUS</option>
                <option>2 PNEUS</option>
                <option>1 PNEUS</option>
              </Select>
              <Text
                ml={"5px"}
                color={"pf-green.main"}
                fontSize={"h4"}
                fontWeight={"600"}
              >
                R$ 4.916,00
              </Text>
              <Text ml={"5px"}>à vista</Text>
            </Flex>

            <Flex
              w={"full"}
              mt={"10px"}
              alignItems={"center"}
              justifyContent={["center", "center", "flex-start"]}
              transition={"1s"}
              flexDir={["column", "column", "row"]}
            >
              <Text>
                Ou em até{" "}
                <span style={{ fontWeight: "700", color: "#58AA47" }}>12x</span>{" "}
                no cartão de crédito
              </Text>
              <Flex alignItems={"center"}>
                <Text
                  ml={"5px"}
                  color={"pf-green.main"}
                  textDecor={"underline"}
                  fontWeight={"600"}
                  fontSize={"text2"}
                >
                  VER PARCELAMENTOS
                </Text>
                <Img
                  src={
                    "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/arrow-right.svg"
                  }
                  ml={"5px"}
                  h={"14px"}
                />
              </Flex>
            </Flex>

            {/* ---Frete-label-desktop--- */}
            <Flex
              w={"full"}
              flexDir={"column"}
              display={["none", "none", "flex"]}
            >
              <Flex w={"full"} mt={"25px"} alignItems={"center"} mb={"5px"}>
                <Flex
                  w="43px"
                  h={"43px"}
                  borderRadius={"25px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgColor={"pf-white.light1"}
                  mr={"5px"}
                >
                  <Img
                    src={
                      "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/frete-ico.svg"
                    }
                  />
                </Flex>
                <Text>Calcule o frete e prazo para sua região</Text>
              </Flex>

              {/* ---Frete input--- */}
              <Flex w={"full"} justifyContent={"flex-end"} maxW={"450px"}>
                <Input
                  w={"full"}
                  borderRadius={"25px"}
                  bgColor={"pf-white.light1"}
                  border={"none"}
                  type={"number"}
                  placeholder={"DIGITE O CEP"}
                  fontWeight={"bold"}
                />
                <Button
                  position={"absolute"}
                  zIndex={"1"}
                  borderRadius={"25px"}
                  border="solid 1px"
                  borderColor={"pf-grey.main"}
                  background={"pf-white.main"}
                  color={"pf-black.light3"}
                >
                  CALCULAR
                </Button>
              </Flex>
            </Flex>

            {/* ---Botao comprar---- */}
            <Button
              maxW={"450px"}
              mt={"15px"}
              w={"full"}
              h={"50px"}
              borderRadius={"50px"}
              variant={"primary-button"}
            >
              COMPRAR
            </Button>
          </Flex>
        </Flex>

        {/* ---desconto-box-mobile--- */}
        <Flex
          transition={"1s"}
          display={["flex", "flex", "none"]}
          padding={["10px", "10px", "25px"]}
          borderRadius={"15px"}
          background={"pf-white.main"}
          mt={"25px"}
          mb={"25px"}
          w={"full"}
          h="auto"
          minH={"100px"}
          flexDir={"column"}
          alignItems={"center"}
          boxShadow={"0px 2px 2px rgba(0, 0, 0, 0.15)"}
        >
          <Flex alignItems={"flex-end"} mt={"-15px"} mb={"10px"}>
            <Img
              mr={"10px"}
              src={
                "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/cart-model.svg"
              }
            />
            <Text color={"pf-black.light1"} fontWeight={"bold"}>
              Pneu com desconto no carrinho!
            </Text>
          </Flex>
          <Flex
            w="full"
            h="40px"
            bgColor={"pf-black.light1"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderRadius={"25px"}
            color={"pf-white.main"}
            fontSize={"title1"}
            fontWeight={"bold"}
            mb={"10px"}
            textAlign={"center"}
          >
            <Flex />
            <Text>10% de desconto</Text>
            <Flex
              w="50%"
              h="full"
              bgColor={"pf-green.main"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"25px"}
            >
              <Text>- R$ 122,90 por pneu</Text>
            </Flex>
          </Flex>
          <Flex textAlign={"center"} alignItems={"center"} mb={"10px"}>
            <Text>
              Pague apenas:{" "}
              <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                R$ 1.106,10
              </span>{" "}
              (uni.) à vista
            </Text>
          </Flex>
          <Flex textAlign={"center"} mb={"10px"}>
            <Text fontSize={"text3"}>
              <span style={{ fontWeight: "bold" }}>4 pneus</span> por{" "}
              <span
                style={{
                  color: "#58AA47",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                R$ 4.424,40
              </span>{" "}
              à vista no <span style={{ fontWeight: "bold" }}>PIX</span> ou{" "}
              <span style={{ fontWeight: "bold" }}>boleto</span>
            </Text>
          </Flex>
          <Flex textAlign={"center"} mb={"10px"}>
            <Text>
              ou em até <span style={{ fontWeight: "bold" }}>12x</span> de{" "}
              <span
                style={{
                  color: "#58AA47",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                R$ 392,97*
              </span>{" "}
              no cartão
            </Text>
          </Flex>
          <Flex textAlign={"center"} mb={"10px"}>
            <Text color={"pf-grey.main"} fontSize={"text3"}>
              *Taxa do cartão de crédito: 2.80% *1.3% de juros ao mês a partir
              da segunda parcela.
            </Text>
          </Flex>
        </Flex>

        {/* ---Frete-label-mobile--- */}
        <Flex
          mb={"50px"}
          w={"full"}
          flexDir={"column"}
          display={["flex", "flex", "none"]}
        >
          <Flex w={"full"} mt={"25px"} alignItems={"center"} mb={"5px"}>
            <Flex
              w="43px"
              h={"43px"}
              borderRadius={"25px"}
              justifyContent={"center"}
              alignItems={"center"}
              bgColor={"pf-white.light1"}
              mr={"5px"}
            >
              <Img
                src={
                  "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/frete-ico.svg"
                }
              />
            </Flex>
            <Text>Calcule o frete e prazo para sua região</Text>
          </Flex>

          {/* ---Frete input--- */}
          <Flex w={"full"} justifyContent={"flex-end"}>
            <Input
              w={"full"}
              borderRadius={"25px"}
              bgColor={"pf-white.light1"}
              border={"none"}
              type={"number"}
              placeholder={"DIGITE O CEP"}
              fontWeight={"bold"}
            />
            <Button
              position={"absolute"}
              zIndex={"1"}
              borderRadius={"25px"}
              border="solid 1px"
              borderColor={"pf-grey.main"}
              background={"pf-white.main"}
              color={"pf-black.light3"}
            >
              CALCULAR
            </Button>
          </Flex>
        </Flex>

        {/* ---Caracteristicas-mobile-- */}
        <Flex
          transition={"1s"}
          display={["flex", "flex", "none"]}
          padding={["10px", "10px", "25px"]}
          borderRadius={"15px"}
          background={"pf-white.main"}
          mb={"25px"}
          w={"full"}
          h="auto"
          minH={"100px"}
          flexDir={"column"}
          alignItems={"center"}
          boxShadow={"0px 2px 2px rgba(0, 0, 0, 0.15)"}
        >
          <Text
            fontSize={"title"}
            color={"pf-green.main"}
            fontWeight={"600"}
            mb={"10px"}
          >
            CARACTERÍSTICAS
          </Text>
          <Flex w={"full"} mb={"15px"}>
            <FeatureCard
              img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/alta.svg"
              name="Alta Performance"
            />
            <FeatureCard
              img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/confortosvg.svg"
              name="Confortavel"
            />
            <FeatureCard
              img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/silencio.svg"
              name="Silencioso"
            />
            <FeatureCard
              img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/silicasvg.svg"
              name="Sílica"
            />
          </Flex>
          <Flex
            mb={"15px"}
            w="full"
            border={"1px dashed"}
            color={"pf-grey.main"}
          />
          <Text
            fontSize={"title"}
            color={"pf-green.main"}
            fontWeight={"600"}
            mb={"10px"}
          >
            VEÍCULOS
          </Text>
          <Text mb={"15px"} textAlign={"center"} color={"pf-black.light1"}>
            Confira a lista dos modelos de veículos compatíveis com essa medida
            de pneu
          </Text>
          <Button
            mb={"15px"}
            variant={"secondary-button"}
            w={"full"}
            color={"pf-black.light1"}
          >
            MODELOS COMPATÍVEIS
          </Button>
        </Flex>

        {/* ------dados-tecnicos--------- */}
        <Flex
          w="full"
          h={"auto"}
          minH={"200px"}
          borderRadius={"15px"}
          background={"pf-white.main"}
          mt={"25px"}
          mb={"25px"}
          flexDir={["column", "column", "row"]}
          justifyContent={"space-between"}
          padding={["10px", "10px", "15px"]}
          boxShadow={"0px 2px 2px rgba(0, 0, 0, 0.15)"}
          transition={"1s"}
        >
          <Flex
            width={["100%", "100%", "50%", "50%", "55%", "55%"]}
            transition={"1s"}
            flexDir={"column"}
          >
            {/* -------CARACTERISTICAS-DESKTOP-------- */}
            <Flex
              display={["none", "none", "flex"]}
              w={"full"}
              flexDir={"column"}
              mb={"25px"}
            >
              <Text
                fontSize={"title"}
                color={"pf-green.main"}
                fontWeight={"600"}
                mb={"10px"}
              >
                CARACTERÍSTICAS
              </Text>
              <Flex w={"full"}>
                <FeatureCard
                  img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/alta.svg"
                  name="Alta Performance"
                />
                <FeatureCard
                  img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/confortosvg.svg"
                  name="Confortavel"
                />
                <FeatureCard
                  img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/silencio.svg"
                  name="Silencioso"
                />
                <FeatureCard
                  img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/silicasvg.svg"
                  name="Sílica"
                />
              </Flex>
            </Flex>

            {/* ------APLICACAO-DESKTOP------ */}
            <Flex
              display={["none", "none", "flex"]}
              w={"full"}
              flexDir={"column"}
              mb={"25px"}
            >
              <Text
                fontSize={"title"}
                color={"pf-green.main"}
                fontWeight={"600"}
              >
                APLICAÇÃO
              </Text>
              <Text mb={"5px"}>
                Confira abaixo os veículos que utilizam essa medida de pneus:
              </Text>
              <Flex w={"full"} h={"auto"} flexDir={"column"}>
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  templateRows={"30px"}
                  w={"full"}
                  h={"auto"}
                >
                  <GridItem w="100%">
                    <BrandCard
                      img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/BMW.png"
                      name="BMW"
                      models="116i, 118i, 120i"
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <BrandCard
                      img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/BMW.png"
                      name="BMW"
                      models="116i, 118i, 120i"
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <BrandCard
                      img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/BMW.png"
                      name="BMW"
                      models="116i, 118i, 120i"
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <BrandCard
                      img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/BMW.png"
                      name="BMW"
                      models="116i, 118i, 120i"
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <BrandCard
                      img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/BMW.png"
                      name="BMW"
                      models="116i, 118i, 120i"
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <BrandCard
                      img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/BMW.png"
                      name="BMW"
                      models="116i, 118i, 120i"
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <BrandCard
                      img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/BMW.png"
                      name="BMW"
                      models="116i, 118i, 120i"
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <BrandCard
                      img="https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/Icons/Produto/BMW.png"
                      name="BMW"
                      models="116i, 118i, 120i"
                    />
                  </GridItem>
                </Grid>
                <Flex
                  w={"full"}
                  h={"40px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={"-30px"}
                  backgroundImage={
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #FFFFFF 58.33%);"
                  }
                >
                  <Img
                    src={
                      "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/arrow-black.svg"
                    }
                  />
                </Flex>
              </Flex>
            </Flex>

            {/* -----INFORMACOES-DESKTOP-------- */}
            <Flex
              display={["none", "none", "flex"]}
              w={"full"}
              flexDir={"column"}
            >
              <Text
                fontSize={"title"}
                color={"pf-green.main"}
                fontWeight={"600"}
                mb={"10px"}
              >
                INFORMAÇÕES
              </Text>
              <Accordion allowToggle>
                <AccordionItem
                  borderRadius={"25px"}
                  background={"pf-white.light1"}
                  border={"none"}
                  mb={"15px"}
                >
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        CONTIPREMIUMCONTACT SSR RUN FLAT
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  mb={"15px"}
                  borderRadius={"25px"}
                  background={"pf-white.light1"}
                  border={"none"}
                >
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        PNEUS RUN FLAT
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  mb={"15px"}
                  borderRadius={"25px"}
                  background={"pf-white.light1"}
                  border={"none"}
                >
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        SOBRE OS PNEUS CONTINENTAL
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  mb={"15px"}
                  borderRadius={"25px"}
                  background={"pf-white.light1"}
                  border={"none"}
                >
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        SOBRE A PNEUFREE.COM
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  mb={"15px"}
                  borderRadius={"25px"}
                  background={"pf-white.light1"}
                  border={"none"}
                >
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        GARANTIA DO PNEU
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>
          <Flex
            ml={"5px"}
            width={["100%", "100%", "50%", "50%", "45%", "45%"]}
            transition={"1s"}
          >
            <Flex ml={"5px"} mr={"5px"} w={"50%"} flexDir={"column"}>
              {/* ----UTQG------ */}
              <Flex w={"full"} flexDir={"column"}>
                <Flex width={"full"} alignItems={"center"} mb={"10px"}>
                  <Text
                    fontSize={"title"}
                    color={"pf-green.main"}
                    fontWeight={"600"}
                    mr={"10px"}
                  >
                    UTQG
                  </Text>
                  <Img
                    cursor={"pointer"}
                    src={
                      "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/icon-click.svg"
                    }
                  />
                </Flex>
                <LabelInfo name="Durabilidade" text={"600"} />
                <LabelInfo name="Aderência" text={"AA"} />
                <LabelInfo name="Temperatura" text={"A"} />
              </Flex>

              {/* ----DADOS TECNICOS------ */}
              <Flex w={"full"} flexDir={"column"}>
                <Flex width={"full"} alignItems={"center"} mb={"10px"}>
                  <Text
                    fontSize={"title"}
                    color={"pf-green.main"}
                    fontWeight={"600"}
                    mr={"10px"}
                  >
                    DADOS TÉCNICOS
                  </Text>
                  <Img
                    cursor={"pointer"}
                    src={
                      "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/icon-click.svg"
                    }
                  />
                </Flex>
                <LabelInfo name="Índice de carga:" text={"91 (615 kg)"} />
                <LabelInfo name="Índice de velocidade:" text={"W (270 km/h)"} />
                <LabelInfo name="Talas compatíveis:" text={"5,5” a 7,5”"} />
                <LabelInfo name="Aplicação:" text={"VIAS PAVIMENTADAS"} />
                <LabelInfo name="Lateral:" text={"LETRAS PRETAS"} />
                <LabelInfo name="Tipo de desenho:" text={"ASSIMÉTRICO"} />
                <LabelInfo name="Tipo" text={"SEM CAMARA"} />
                <LabelInfo name="Construção:" text={"RADIAL"} />
                <LabelInfo name="Inmetro" text={"002010/2013"} />
              </Flex>
            </Flex>

            {/* ----INMETRO------ */}
            <Flex w={"50%"} flexDir={"column"}>
              <Flex width={"full"} alignItems={"center"} mb={"10px"}>
                <Text
                  fontSize={"title"}
                  color={"pf-green.main"}
                  fontWeight={"600"}
                  mr={"10px"}
                >
                  INMETRO
                </Text>
                <Img
                  cursor={"pointer"}
                  src={
                    "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/icon-click.svg"
                  }
                />
              </Flex>
              <Img
                maxW={"200px"}
                src={
                  "https://pneufree.s3.sa-east-1.amazonaws.com/Site/images/inmetro.png"
                }
              />
            </Flex>
          </Flex>
        </Flex>

        {/* ------avaliacoes-desktop--------- */}
        <Flex
          w="full"
          h={"auto"}
          minH={"200px"}
          borderRadius={"15px"}
          background={"pf-white.main"}
          mt={"25px"}
          mb={"25px"}
          flexDir={"column"}
          justifyContent={"space-between"}
          py={["10px", "10px", "25px"]}
          px={["10px", "10px", "15px"]}
          boxShadow={"0px 2px 2px rgba(0, 0, 0, 0.15)"}
          transition={"1s"}
        >
          <Flex
            w={"full"}
            h={"auto"}
            justifyContent={"space-between"}
            mb={"25px"}
            flexDir={["column", "column", "row"]}
          >
            {/* ------avaliacao-geral-desktop------- */}
            <Flex w={"49%"}>
              <Flex flexDir={"column"} alignItems={"center"}>
                <Flex
                  w={"110px"}
                  h={"110px"}
                  bgColor={"pf-green.main"}
                  borderRadius={"100px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  color={"pf-white.main"}
                  fontSize={"priceTit"}
                  fontWeight={"bold"}
                  mb={"10px"}
                >
                  <Text>4,8</Text>
                </Flex>
                <Text>Média Geral</Text>
              </Flex>
              <Flex ml={"20px"} flexDir={"column"}>
                <Text
                  fontSize={"title"}
                  color={"pf-green.main"}
                  fontWeight={"600"}
                  mb={"10px"}
                >
                  AVALIAÇÃO GERAL
                </Text>
                <Text mb={"15px"} fontSize={"title2"} color={"pf-black.light3"}>
                  CONTIPREMIUMCONTACT SSR{" "}
                  <span style={{ color: "#FF5353" }}>RUN FLAT</span>
                </Text>
                <ViewRatings TotalRatings={4} />
                <Button
                  display={["none", "none", "flex"]}
                  mb={"15px"}
                  variant={"secondary-button"}
                  w={"full"}
                  color={"pf-black.light1"}
                >
                  VER TODAS AVALIAÇÕES
                </Button>
              </Flex>
            </Flex>
            <Button
              mt={"15px"}
              display={["flex", "flex", "none"]}
              mb={"15px"}
              variant={"secondary-button"}
              w={"full"}
              color={"pf-black.light1"}
            >
              VER TODAS AVALIAÇÕES
            </Button>

            {/* ------linha-espacamento----------- */}
            <Flex
              transition={"1s"}
              w={["full", "full", "auto"]}
              h={["5px", "5px", "250px"]}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Flex
                w={["100%", "100%", "1px"]}
                h={["1px", "1px", "200px"]}
                border={"1px dashed"}
                color={"pf-grey.main"}
              />
            </Flex>

            {/* ----------ultimas-avaliacoes-desktop--------- */}
            <Flex
              w={["full", "full", "49%"]}
              flexDir={"column"}
              ml={["0px", "0px", "10px"]}
              transition={"1s"}
            >
              <Flex flexDir={"column"} display={["none", "none", "flex"]}>
                <Text fontSize={"title"} color={"pf-green.main"} mb={"10px"}>
                  Avaliações da medida 205/55R16 91W
                </Text>
                <Flex mb={"15px"}>
                  <Flex flexDir={"column"} alignItems={"center"} mr={"15px"}>
                    <Flex
                      w={"110px"}
                      h={"110px"}
                      border={"1px solid #ABABAB"}
                      bgColor={"pf-white.main"}
                      borderRadius={"100px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      color={"pf-green.main"}
                      fontSize={"priceTit"}
                      fontWeight={"bold"}
                      mb={"10px"}
                    >
                      <Text>4,5</Text>
                    </Flex>
                    <Text>Média Geral</Text>
                  </Flex>
                  <Text>avaliacoes vai aqui</Text>
                </Flex>
              </Flex>

              <Flex
                w={"full"}
                minH={"100px"}
                h={"auto"}
                display={["flex", "flex", "none"]}
                flexDir={"column"}
                mt={"15px"}
              >
                <Flex>
                  <Flex flexDir={"column"} alignItems={"center"} mr={"15px"}>
                    <Flex
                      w={"110px"}
                      h={"110px"}
                      border={"1px solid #ABABAB"}
                      bgColor={"pf-white.main"}
                      borderRadius={"100px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      color={"pf-green.main"}
                      fontSize={"priceTit"}
                      fontWeight={"bold"}
                      mb={"10px"}
                    >
                      <Text>4,5</Text>
                    </Flex>
                    <Text>Média</Text>
                  </Flex>
                  <Flex
                    flexDir={"column"}
                    h={"100px"}
                    justifyContent={"center"}
                  >
                    <Text fontSize={"h4"} color={"pf-green.main"}>
                      AVALIAÇÕES DA MEDIDA
                    </Text>
                    <Text
                      fontSize={"title"}
                      fontWeight={"bold"}
                      color={"pf-black.light1"}
                    >
                      205/55R16 91W
                    </Text>
                  </Flex>
                </Flex>
                <Flex w={"full"} h={"100px"}></Flex>
              </Flex>

              <Button
                mb={"15px"}
                variant={"secondary-button"}
                w={"full"}
                color={"pf-black.light1"}
              >
                VER TODAS (45) AVALIAÇÕES
              </Button>
            </Flex>
          </Flex>

          {/* --------ultimas-avaliacoes-desktop------- */}
          <Flex
            w={"full"}
            h={"auto"}
            flexDir={"column"}
            display={["none", "none", "flex"]}
          >
            <Flex w={"full"} justifyContent={"center"}>
              <Text fontSize={"title"} color={"pf-green.main"} mb={"10px"}>
                Últimas avaliações dos nossos clientes
              </Text>
            </Flex>
            <Flex w={"full"} h={"200px"} border={"solid"}></Flex>
          </Flex>
        </Flex>

        {/* --------informaceos-acordion-mobile---------- */}
        <Flex
          w="full"
          h={"auto"}
          minH={"200px"}
          borderRadius={"15px"}
          background={"pf-white.main"}
          mt={"25px"}
          mb={"25px"}
          flexDir={"column"}
          justifyContent={"space-between"}
          py={["10px", "10px", "25px"]}
          px={["10px", "10px", "15px"]}
          boxShadow={"0px 2px 2px rgba(0, 0, 0, 0.15)"}
          display={["flex", "flex", "none"]}
        >
          <Text
            fontSize={"title"}
            color={"pf-green.main"}
            fontWeight={"600"}
            mb={"10px"}
          >
            INFORMAÇÕES
          </Text>
          <Accordion allowToggle>
            <AccordionItem
              borderRadius={"25px"}
              background={"pf-white.light1"}
              border={"none"}
              mb={"15px"}
            >
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    CONTIPREMIUMCONTACT SSR RUN FLAT
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              mb={"15px"}
              borderRadius={"25px"}
              background={"pf-white.light1"}
              border={"none"}
            >
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    PNEUS RUN FLAT
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              mb={"15px"}
              borderRadius={"25px"}
              background={"pf-white.light1"}
              border={"none"}
            >
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SOBRE OS PNEUS CONTINENTAL
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              mb={"15px"}
              borderRadius={"25px"}
              background={"pf-white.light1"}
              border={"none"}
            >
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    SOBRE A PNEUFREE.COM
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              mb={"15px"}
              borderRadius={"25px"}
              background={"pf-white.light1"}
              border={"none"}
            >
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    GARANTIA DO PNEU
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Layout>
    </>
  );
}
