import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";
import SwiperCore, { Autoplay } from "swiper/core";
import { Pagination } from "swiper";
import Dell from "../../Assets/Dell.jpg";
import Hp from "../../Assets/hp.png";
import Cisco from "../../Assets/cisco (2).png";
import Norden from "../../Assets/Norden.png";
import Acp from "../../Assets/APC.png";
import Mobotix from "../../Assets/Mob.png";
import Panasonic from "../../Assets/pan.png";
import Motorola from "../../Assets/motorola.jpg";
import ZKT from "../../Assets/ZKT.png";
import Kaspersky from "../../Assets/kAS.png";
SwiperCore.use([Autoplay]);

const Slider = () => {
  return (
    <div>
      <h2 className="Product__Header"> Product</h2>
      <h3 className="Product__Text">Our Partner</h3>
      <Swiper
        autoplay={{
          delay: 1000,
        }}
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Dell} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cisco} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Norden} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Acp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mobotix} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Panasonic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Motorola} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ZKT} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Kaspersky} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
