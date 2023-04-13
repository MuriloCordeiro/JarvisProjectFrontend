import { useState } from "react";
import {
  Flex,
  Button,
  Text,
  useBreakpointValue,
  Img,
  Input,
} from "@chakra-ui/react";

import Layout from "../Layouts/layout";
import { BannersCarousel } from "../components/Carousel/bannerCarousel";
import SearchBySize from "../components/Search/Desktop/searchBySize";
import SearchByRim from "../components/Search/Desktop/searchByRim";
import SearchByVehicle from "../components/Search/Desktop/searchByVehicle";
import { WeeklyHighLights } from "../components/weeklyHighlights";
import { TiresOnSale } from "../components/tiresOnSale";
import { DisplayBrands } from "../components/displayBrands";
import { PneufreeBlog } from "../components/pneufreeBlog";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xs: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });

  return (
    <>
      <BannersCarousel />
      <Layout>
        <SearchBySize />
        <SearchByVehicle />
        <SearchByRim />
        <WeeklyHighLights />
        <TiresOnSale />
        <DisplayBrands />
        <PneufreeBlog />
      </Layout>
    </>
  );
}
