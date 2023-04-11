import { useState } from "react";
import { Flex, Button, Text, useBreakpointValue, Img } from "@chakra-ui/react";

import Layout from "../Layouts/layout";
import { BannersCarousel } from "../components/bannercarousel";

export default function Home() {
  // const isWideVersion = useBreakpointValue({
  //   base: true,
  //   sm: true,
  //   md: false,
  //   lg: false,
  // });

  const responsiveStyles = useBreakpointValue({
    base: false,
    xsm: false,
    sm: false,
    medium: false,
    large: true,
  });

  return (
    <>
      <BannersCarousel />
      <Layout>
        <Text textStyle="Header3">teste</Text>
        <Button variant="primary-button">PESQUISAR</Button>
        <Button variant="secondary-button" mt="1rem">
          Secondary Button
        </Button>
      </Layout>
    </>
  );
}
