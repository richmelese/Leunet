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
    console.log(isIntersecting);
    console.log(ref);

    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-100px" }
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
      if (isIntersecting) {
        console.log(ref.current.children.length);
        ref.current.querySelectorAll("*").forEach((el) => {
          el.classList.add("slide-in");
        });
      }
    }, [isIntersecting]);
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
    <div className="home_choose_us container" id="about" ref={ref}>
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
          <p className="small_title">About Us</p>
          <h2>About LeuNet ICT Solutions</h2>
          <p className="desc">
            LeuNet ICT Solutions (LeuNet) is an information communication
            technology (ICT) service provider company registered as a privately
            owned limited company in Ethiopia in 2014 G.C It has been serving an
            ever-growing number of clients and is a leading local company in
            technological solution provisioning since its foundation. In a
            relatively short period of time, LeuNet has attracted the attention
            of many customers through the company’s work discipline and
            professional and expert solutions.
          </p>
          <button className="gl_button">Get Started</button>
        </div>
      </div>
    </div>
  );
}
