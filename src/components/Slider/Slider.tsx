import { SwiperProps, Swiper } from "swiper/react";

import { ReactNode } from "react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/swiper.css";
import { Flex } from "@chakra-ui/react";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}
export default function Slider({ children, settings }: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
}
