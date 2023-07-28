import React from "react";
import { useState, useRef, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import img from "../../Assets/testimonial-guy.png";
import Insa from "../../Assets/insalogo.jpg";
import ECWE from "../../Assets/ecwc.jpg";
import Injibar from "../../Assets/injibar.jpg";
import Moh from "../../Assets/Mohlogo.jpg";
const testimonials = [
  {
    name: "INSA",
    title: "CFO of Information Network Security Administration",
    img: Insa,
    testimony:
      "We have been using their services for over 3 years now, We always have the best experience with FPA. Thank you for getting back to us in a timely manner and helping us with the littlest or biggest of problems when it comes to our computers. Thank you for making sure our technical needs are always taken care of..",
  },
  {
    name: "ECWC",
    title: "CFO of ECWC ",
    img: ECWE,
    testimony:
      "Their virtualization solutions have transformed our IT infrastructure, making it more agile and flexible. We are now able to scale up or down depending on our business needs, which has helped us reduce costs and improve our bottom line.",
  },
  {
    name: "Injibara University",
    title: "CFO of Injibara University",
    img: Injibar,
    testimony:
      "Their virtualization solutions have transformed our IT infrastructure, making it more agile and flexible. We are now able to scale up or down depending on our business needs, which has helped us reduce costs and improve our bottom line.",
  },
  {
    name: "MoH Minisrt Of Health",
    title: "CFO of Minisrt Of Health",
    img: Moh,
    testimony:
      "Their CCTV security system installation has made our premises more secure, and we can now monitor our facilities in real-time. Their team of experts helped us select the right cameras and provided us with training on how to use them effectively.",
  },
];
export default function HomeTestimonial() {
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
      ref.current.querySelectorAll("*:not(.swiper-wrapper)").forEach((el) => {
        el.classList.add("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <div ref={ref}>
      <div className="home_testimonial">
        <div className="container">
          <div className="title_sec">
            <p className="small_title">Testimonial</p>
            <h3>Trusted by millions.</h3>
          </div>

          <div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {testimonials.map((testimony, i) => {
                return (
                  <SwiperSlide key={i}>
                    <p className="testimony">{testimony.testimony}</p>
                    <img src={testimony.img} />
                    <p className="name">{testimony.name}</p>
                    <p className="title">{testimony.title}</p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className="ptrn_1"></div>
        <div className="ptrn_2"></div>
        <div className="ptrn_3"></div>
        <div className="ptrn_4"></div>
        <div className="ptrn_5"></div>
        <div className="ptrn_6"></div>
      </div>
    </div>
  );
}
