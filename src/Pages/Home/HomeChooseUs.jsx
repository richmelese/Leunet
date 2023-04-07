import React from "react";
import { useState, useRef, useEffect } from "react";
import img_1 from "../../Assets/choose-us-1.png";
import img_2 from "../../Assets/choose-us-2.png";
import img_3 from "../../Assets/choose-us-3.png";

export default function ChooseUs() {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-200px" }
      );

      observer.observe(ref.current);
  
      return () => observer.disconnect();
    }, [isIntersecting]);
  
    useEffect(() => {
      if (isIntersecting) {
        ref.current.querySelectorAll("*").forEach((el) => {
          el.classList.add("slide-in");
        });
      }
    }, [isIntersecting]);


    return (
        <div className="home_choose_us container" ref={ref}>
            <div className="image_section">
                <div className="lft">
                    <img src={img_1} />
                    <img src={img_2} />
                </div>
                <div className="rit">
                    <div>
                        <img src={img_3} />
                    </div>
                </div>
            </div>
            <div className="message_section">
                <div>
                    <p className="small_title">Why Choose Us</p>
                    <h2>Make your customers happy by giving services.</h2>
                    <p className="desc">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                        layout. The point of using Lorem Ipsum is that it has a more-or-less. A domain name is one of the first steps to
                        establishing your brand. Secure a consistent brand image with a domain name that matches your business.
                    </p>
                    <button className="gl_button">Get Started</button>
                </div>
            </div>
        </div>
    );
}
