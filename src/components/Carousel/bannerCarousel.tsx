import { Flex, Img } from "@chakra-ui/react";
import { api } from "../../services/api";
import { useState } from "react";

export function BannersCarousel() {
  return (
    <Flex>
      <Img src="https://d1mvenqtvaw2m9.cloudfront.net/Site/images/Logos/mockbanner.png" />
    </Flex>
  );
}
