import React, { useEffect, useState } from "react";
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
        desc: "Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas. Sodales .Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas. Sodales .",
    },
    {
        img: img_2,
        title: "IPTV System Installation",
        desc: "Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas. Sodales .Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas. Sodales .",
    },
    {
        img: img_3,
        title: "Wireless Access Points Installation",
        desc: "Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas. Sodales .Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas. Sodales .",
    },
    {
        img: img_4,
        title: "Access Control System Installation",
        desc: "Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas. Sodales .Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas. Sodales .",
    },
    {
        img: img_5,
        title: "CCTV Security System Installation",
        desc: "Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas. Sodales .Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas. Sodales .",
    },
    {
        img: img_6,
        title: "PBX System Installation",
        desc: "Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas. Sodales .Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas. Sodales .",
    },
];

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");

});


export default function ServicesServiceList() {
    const [active, setActive] = useState(0);
    
    useEffect(() =>  {

        let mainNavLinks = document.querySelectorAll(".services_navigation >  ul > li");
        window.addEventListener("scroll", (event) => {
            let fromTop = window.scrollY;

            let sn = document.querySelectorAll(".services_navigation")[0];
            if(sn.offsetTop > fromTop) return;

            mainNavLinks.forEach((link) => {
                let section = document.querySelector(link.children[0].hash);
    
                if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        });


    });

    return (
        <div className="services_service_list">
            <div className="services_navigation">
                <ul>
                    {serviceList.map((ser, i) => {
                        return (
                            <li key={i} className={active == i ? "active" : ""}>
                                <a href={`#service_num_${i}`} onClick={() => setActive(i)}>
                                    {ser.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="services">
                {serviceList.map((ser, i) => {
                    return (
                        <div id={`service_num_${i}`} key={i} className="service_item">
                            <div className="top">
                                <div className="img_wrapper">
                                    <img src={ser.img} />
                                </div>
                                <h5>{ser.title}</h5>
                            </div>
                            <div className="middle">
                                <p>{ser.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
