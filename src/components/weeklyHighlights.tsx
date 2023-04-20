// pages/index.js

import React from "react";
import { Flex, Text, Img } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/Image/brutus.png",
  "/Image/brutus.png",
  "/Image/brutus.png",
  "/Image/brutus.png",
];

export default function WeeklyHighLights() {
  return (
    <Flex w="full" align="center" h="100rem" px="20rem">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={4}
        navigation={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Img src="/Image/brutus.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src="/Image/brutus.png" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Img src="/Image/brutus.png" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Img src="/Image/brutus.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src="/Image/brutus.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src="/Image/brutus.png" />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
