import React from "react";
import { useState, useRef, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import img from "../../Assets/testimonial-guy.png";

const testimonials = [
    {
        name: "John, ",
        title: "CEO of a manufacturing company",
        img: img,
        testimony:
            "We have been using their services for over 3 years now, and they have never let us down. Their team of experts is always available to help us with any IT issues, and their solutions have helped us streamline our operations and increase efficiency.",
    },
    {
        name: "Lisa",
        title: "CTO of a software development company",
        img: img,
        testimony:
            "Their virtualization solutions have transformed our IT infrastructure, making it more agile and flexible. We are now able to scale up or down depending on our business needs, which has helped us reduce costs and improve our bottom line.",
    },
    {
        name: "Michael",
        title: "CFO of a financial services company",
        img: img,
        testimony:
            "Their virtualization solutions have transformed our IT infrastructure, making it more agile and flexible. We are now able to scale up or down depending on our business needs, which has helped us reduce costs and improve our bottom line.",
    },
    {
        name: "Sarah",
        title: "COO of a retail chain",
        img: img,
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
            { rootMargin: "-200px" }
        );
        console.log(ref);
        console.log(isIntersecting);
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
        <div className="home_testimonial" >
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
