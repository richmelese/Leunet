import React from "react";
import { useState, useRef, useEffect } from "react";
import img_1 from "../../Assets/ser-db-icon.png";
import img_2 from "../../Assets/ser-iptv-icon.png";
import img_3 from "../../Assets/ser-wifi-icon.png";
import img_4 from "../../Assets/ser-access-ctrl-icon.png";
import img_5 from "../../Assets/ser-cctv-icon.png";
import img_6 from "../../Assets/ser-pbx-icon.png";

const serviceList = [
    {
        img: img_1,
        title: "Data & Telephone Structured Cabling",
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece.",
    },
    {
        img: img_2,
        title: "Data & Telephone Structured Cabling",
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece.",
    },
    {
        img: img_3,
        title: "Data & Telephone Structured Cabling",
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece.",
    },
    {
        img: img_4,
        title: "Data & Telephone Structured Cabling",
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece.",
    },
    {
        img: img_5,
        title: "Data & Telephone Structured Cabling",
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece.",
    },
    {
        img: img_6,
        title: "Data & Telephone Structured Cabling",
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece.",
    },
];

export default function HomeServices() {
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
            ref.current.querySelectorAll("*").forEach((el) => {
                el.classList.add("slide-in");
            });
        }
    }, [isIntersecting]);

    return (
        <div className="home_services container" ref={ref}>
            <div className="title_sec">
                <p className="small_title">Services</p>
                <h3>Services We Provide</h3>
            </div>
            <div className="services">
                {serviceList.map((ser, i) => {
                    return (
                        <div key={i} className="service_item">
                            <div className="top">
                                <div className="img_wrapper">
                                    <img src={ser.img} />
                                </div>
                                <h5>{ser.title}</h5>
                            </div>
                            <div className="middle">
                                <p>{ser.desc}</p>
                            </div>
                            <a href="#">Explore More</a>
                        </div>
                    );
                })}
            </div>
            <div className="button_wrapper">
                <button className="gl_button">Explore More</button>
            </div>
        </div>
    );
}
