import { Flex, Img, Text } from "@chakra-ui/react";

interface ratingProps {
  TotalRatings: number;
}

export default function rating({ TotalRatings }: ratingProps) {
  const TotalValue = 5;
  const TotalPercent = 100;
  const Percent = 100 - (TotalPercent * TotalRatings) / TotalValue;

  return (
    <Flex
      textStyle={"Bold"}
      fontSize={"20px"}
      alignItems={"center"}
      color={"pf-yellow.main"}
      gap={"5px"}
    >
      <Text color={"pf-black.light1"} fontWeight={"bold"}>
        {TotalRatings}
      </Text>
      <Img
        src={
          "https://d1mvenqtvaw2m9.cloudfront.net/XBRI/images/Site/img/stars.png"
        }
        bgImage={
          "https://d1mvenqtvaw2m9.cloudfront.net/XBRI/images/Site/img/stars_back.png"
        }
        bgRepeat={"no-repeat"}
        bgPos={`-${Percent}px 0px`}
      />
      <Text fontSize={"text2"} color={"pf-black.light3"}>
        {Percent} avaliações
      </Text>
    </Flex>
  );
}

export function ViewRatings({ TotalRatings }: ratingProps) {
  const TotalValue = 5;
  const TotalPercent = 100;
  const Percent = 100 - (TotalPercent * TotalRatings) / TotalValue;

  return (
    <Flex flexDir={"column"} mb={"15px"}>
      <Flex mb={"15px"}>
        <Img
          src={
            "https://d1mvenqtvaw2m9.cloudfront.net/XBRI/images/Site/img/stars.png"
          }
          bgImage={
            "https://d1mvenqtvaw2m9.cloudfront.net/XBRI/images/Site/img/stars_back.png"
          }
          bgRepeat={"no-repeat"}
          bgPos={`-${Percent}px 0px`}
        />
      </Flex>
      <Flex
        padding={"5px"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"25px"}
        w={"220px"}
        bgColor={"pf-black.light2"}
      >
        <Text>
          <span style={{ fontWeight: "bold" }}>{TotalRatings} pessoas</span>{" "}
          avaliaram
        </Text>
      </Flex>
    </Flex>
  );
}
