import React from "react";

import HomeChooseUs from "./HomeChooseUs";
import HomeCollage from "./HomeCollage";
import HomeProducts from "./HomeProducts";
import HomeServices from "./HomeServices";
import HomeSolutions from "./HomeSolutions";
import HomeTestimonial from "./HomeTestimonial";
import Footer from "../../Components/Footer";
import Slider from "./Slider";
import HomeMain from "./HomeMain";

export default function Home() {
  return (
    <div className="home">
      <HomeMain />

      {/* <HomeCollage /> */}
      <HomeChooseUs />

      <HomeServices />
      <HomeTestimonial />
      <HomeSolutions />
      <Slider />
      {/* <HomeProducts /> */}
      <Footer />
    </div>
  );
}
