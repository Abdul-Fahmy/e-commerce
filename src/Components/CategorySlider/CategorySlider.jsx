import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CategorySlider() {
  let [categories, setCategories] = useState(null);
  async function getCategories() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/categories",
      method: "GET",
    };
    let { data } = await axios.request(options);
    setCategories(data.data);
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <section className="my-8 text-center md:text-start">
        <h2 className="text-lg font-semibold text-gray-500 mb-2 ">
          Shop Popular Categories
        </h2>
        {!categories ? (
          <Loading />
        ) : (
          <Swiper breakpoints={
            {320:{
            slidesPerView:1
          },
          480:{
            slidesPerView:3
          },
          640:{
            slidesPerView:4
          },
          860:{
            slidesPerView:6
          }
          
          }} loop={true}>
            {categories.map((category) => (
              <SwiperSlide key={category._id}>
                <div className="h-80">
                  <img
                    className="w-full h-full object-cover"
                    src={category.image}
                    alt=""
                  />
                </div>
                <h3>{category.name}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </>
  );
}
