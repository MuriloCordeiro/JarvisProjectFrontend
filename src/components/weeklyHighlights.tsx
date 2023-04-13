import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { api } from "../services/api";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export function WeeklyHighLights() {
  return (
    <>
      <Flex w="100%" h="100%" justify="center">
        <Flex w="100%" px="15rem">
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {" "}
            <SwiperSlide>
              <Img src="/Image/brutus.png" w="full" />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Img src="/Image/brutus.png" w="full" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src="/Image/brutus.png" w="full" />
            </SwiperSlide>
            <SwiperSlide />
            <SwiperSlide />
            <SwiperSlide />
          </Swiper>
        </Flex>
      </Flex>
      {/* Outros componentes de UI */}
    </>
  );
}
