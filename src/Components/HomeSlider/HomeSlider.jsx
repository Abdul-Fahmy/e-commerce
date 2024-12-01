import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import sliderImg1 from "../../assets/slider-image-1.jpeg";
import sliderImg2 from "../../assets/slider-image-2.jpeg";
import sliderImg3 from "../../assets/slider-image-3.jpeg";

export default function HomeSlider() {
  return (
    <>
      <section className="grid grid-cols-12 my-4">
        <div className="col-span-8">
          <Swiper loop={true} className="h-full">
            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={sliderImg3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={sliderImg3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={sliderImg3}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-4">
          <img className="w-full" src={sliderImg1} alt="" />
          <img className="w-full" src={sliderImg2} alt="" />
        </div>
      </section>
    </>
  );
}
