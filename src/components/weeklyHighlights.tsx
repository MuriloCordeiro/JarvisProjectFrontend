// pages/index.js

import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "https://placehold.co/480x300?font=roboto&text=Slide+1",
  "https://placehold.co/480x300?font=roboto&text=Slide+2",
  "https://placehold.co/480x300?font=roboto&text=Slide+3",
  "https://placehold.co/480x300?font=roboto&text=Slide+4",
];

export default function WeeklyHighLights() {
  return (
    <Flex w="full" align="center" h="100rem">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Flex>
  );
}
