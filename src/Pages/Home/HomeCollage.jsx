import React from "react";
import dashboard_img from "../../Assets/slid (1).png";
import dashboard_img_1 from "../../Assets/slid (2).png";
import dashboard_img_2 from "../../Assets/slid (3).png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [dashboard_img, dashboard_img_1, dashboard_img_2];

export default function HomeCollage() {
  return (
    <div className="home_collage container" id="home">
      <div className="ptrn_1"></div>
      <div className="message_section">
        <h1>LeuNet ICT Solutions</h1>
        <p>
          LeuNet ICT Solutions (LeuNet) is an information communication
          technology (ICT) service provider company registered as a privately
          owned limited company in Ethiopia in 2014 G.C
        </p>
        <a href="/about">
          <button className="gl_button">Get Started</button>
        </a>
      </div>
      <div className="image_section">
        <Carousel autoPlay emulateTouch infiniteLoop>
          {images.map((im, i) => {
            return <img key={i} src={im} alt="dashboard" />;
          })}
        </Carousel>
      </div>
      <div className="ptrn_2"></div>
      <div className="ptrn_3"></div>
    </div>
  );
}
