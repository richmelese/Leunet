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
import Ploycome from "../../Assets/ploycom.png";
import Axis from "../../Assets/axis.png";
import Hpe from "../../Assets/hpe.png";
import Bloden from "../../Assets/beldon.png";
import Lenovo from "../../Assets/lenovo.png";
import Canon from "../../Assets/canon.png";
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
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          600: {
            // width: 576,
            slidesPerView: 3,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        id="Log__swiper"
      >
        <SwiperSlide id="swiper-slid">
          <a href="https://www.dell.com/">
            {" "}
            <img src={Dell} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.hp.com/">
            {" "}
            <img src={Hp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.cisco.com/">
            {" "}
            <img src={Cisco} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.nordencommunication.com/">
            <img src={Norden} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.apc.com/au/en/">
            <img src={Acp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.mobotix.com/">
            {" "}
            <img src={Mobotix} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.panasonic.com">
            {" "}
            <img src={Panasonic} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.motorola.com/us/">
            {" "}
            <img src={Motorola} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.zkteco.com/en/">
            {" "}
            <img src={ZKT} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.kaspersky.com">
            {" "}
            <img src={Kaspersky} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.poly.com">
            {" "}
            <img src={Ploycome} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.axis.com/">
            {" "}
            <img src={Axis} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.hpe.com/">
            {" "}
            <img src={Hpe} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.beldon.com/">
            {" "}
            <img src={Bloden} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://www.lenovo.com/">
            {" "}
            <img src={Lenovo} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide id="swiper-slid">
          <a href="https://global.canon/">
            {" "}
            <img src={Canon} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
