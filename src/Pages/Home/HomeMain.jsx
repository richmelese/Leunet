import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import dashboard_img from "../../Assets/slid (1).png";
import dashboard_img_1 from "../../Assets/slid (2).png";
import dashboard_img_2 from "../../Assets/slid (3).png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// SwiperCore.use([Autoplay]);
import background from "../../Assets/dashboard-1.png";
import Homebg from "../../Assets/bgs2.png";
import home2 from "../../Assets/BG.png";
import Newbg from "../../Assets/bgbanner.png";

const images = [dashboard_img, dashboard_img_1, dashboard_img_2];

const HomeMain = () => {
  return (
    <div className="Home__Main__container">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        autoplay={{
          delay: 2000,
        }}
        className="Home__Main__Swiper"
      >
        <SwiperSlide>
          <div>
            <img className="New-imgs" src={Newbg} alt="" />
            <div className="New-home-container">
              <div>
                <h1>LeuNet ICT Solutions</h1>
                <p>
                  LeuNet ICT Solutions (LeuNet) is an information communication
                  technology (ICT) service provider company registered as a
                  privately owned limited company in Ethiopia in 2014 G.C
                </p>
                <button className="gl_button">Get Started</button>
              </div>
              <div>
                {/* <img className="Grid-img" src={dashboard_img_1} alt="" /> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="New-imgs" src={home2} alt="" />
            <div className="New-home-container">
              <div>
                <h1>LeuNet ICT Solutions</h1>
                <p>
                  LeuNet ICT Solutions (LeuNet) is an information communication
                  technology (ICT) service provider company registered as a
                  privately owned limited company in Ethiopia in 2014 G.C
                </p>
                <button className="gl_button">Get Started</button>
              </div>
              <div>
                {/* <img className="Grid-img" src={dashboard_img_1} alt="" /> */}
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div>
            <img className="New-imgs" src={Homebg} alt="" />
            <div className="New-home-container">
              <div>
                <h1>LeuNet ICT Solutions</h1>
                <p>
                  LeuNet ICT Solutions (LeuNet) is an information communication
                  technology (ICT) service provider company registered as a
                  privately owned limited company in Ethiopia in 2014 G.C
                </p>
                <button className="gl_button">Get Started</button>
              </div>
              <div>
                {/* <img className="Grid-img" src={dashboard_img_1} alt="" /> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeMain;
