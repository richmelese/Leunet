import React from "react";
import img_1 from "../../Assets/sol-1.jpg";
import img_2 from "../../Assets/sol-2.jpg";
import img_3 from "../../Assets/sol-3.jpg";

export default function SolutionsWeProvide() {
  return (
    <div className="solutions_we_provide container">
      <div className="image_section">
        <div className="lft">
          <img className="img_1" src={img_1} />
          <img src={img_2} />
        </div>
        <div className="rit">
          <div>
            <img src={img_3} />
          </div>
        </div>
      </div>
      <div className="title_sec">
        <p className="small_title">Solutions</p>
        <h3>Our Solutions</h3>
        <p>
          LeuNet ICT Solution provides customized and scalable technology
          solutions to meet the unique needs of businesses and organizations of
          all sizes. Our solutions include advanced networking and wireless
          communication, secure access control systems, reliable video
          surveillance, state-of-the-art audiovisual systems, and more. We work
          closely with our clients to understand their requirements and design
          tailored solutions that help them achieve their goals and stay ahead
          of the competition. Our solutions are backed by expert services and
          support, ensuring that our clients always have the technology
          infrastructure they need to succeed.
        </p>
      </div>
    </div>
  );
}
