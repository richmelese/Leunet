import React from "react";
import GrowWithUs from "../../Components/GrowWithUs";

import ServicesOurServices from "./ServicesOurServices";
import ServicesServiceList from "./ServicesServiceList";
import Footer from "../../Components/Footer";

export default function Services() {
  return (
    <div>
      <div className="services_page container">
        <ServicesOurServices />
        <ServicesServiceList />
      </div>
      <GrowWithUs />
      {/* <Footer /> */}
    </div>
  );
}
