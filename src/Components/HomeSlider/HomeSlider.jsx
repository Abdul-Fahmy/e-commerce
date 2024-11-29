import React from "react";
import Swiper from "swiper/react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import sliderImg1 from "../../assets/slider-image-1.jpeg";
import sliderImg2 from "../../assets/slider-image-2.jpeg";
import sliderImg3 from "../../assets/slider-image-3.jpeg";

export default function HomeSlider() {
  return (
    <Swiper slidesPerView={1} loop="true">
      <SwiperSlide>{sliderImg1}</SwiperSlide>
      <SwiperSlide>{sliderImg2}</SwiperSlide>
      <SwiperSlide>{sliderImg3}</SwiperSlide>
    </Swiper>
  );
}
