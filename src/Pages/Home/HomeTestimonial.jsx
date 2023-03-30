import React from "react";
import { useState, useRef, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import img from "../../Assets/testimonial-guy.jpeg";

const testimonials = [
    {
        name: "James Toriff 1",
        title: "Manager",
        img: img,
        testimony:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage .There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage .There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage .",
    },
    {
        name: "James Toriff 2",
        title: "Manager",
        img: img,
        testimony:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage .",
    },
    {
        name: "James Toriff 3",
        title: "Manager",
        img: img,
        testimony:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage .",
    },
    {
        name: "James Toriff 4",
        title: "Manager",
        img: img,
        testimony:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage .",
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
                    <h3>Trusted by millions of creators.</h3>
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
