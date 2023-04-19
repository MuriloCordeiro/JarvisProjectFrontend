import { Flex, Img, useBreakpointValue, Text } from "@chakra-ui/react";

interface ratingProps {
  TotalRatings: number;
}

export default function rating({ TotalRatings }: ratingProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    xs: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });

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
