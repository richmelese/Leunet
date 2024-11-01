import React from "react";
import { useState, useRef, useEffect } from "react";
import DataServices from "../../Data/DataServices";
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
        desc: "Our services include the installation and configuration of structured cabling systems, including copper and fiber optic cabling, patch panels, cabinets, and other network components.",
    },
    {
        img: img_2,
        title: "Wireless Access Points Installation",
        desc: "Our technicians can strategically install access points for full coverage and a strong signal. We use industry-standard practices and the latest technology to ensure high-quality installations for new and existing wireless networks. ",
    },
    {
        img: img_3,
        title: "Access Control System Installation",
        desc: "Our team of experts can install access control systems, including card readers, biometric scanners, and other security measures, to ensure that only authorized personnel can enter your building or specific areas within it.",
    },
    {
        img: img_4,
        title: "PBX System Installation",
        desc: "Our team of experts can install PBX phone systems to provide you with a centralized system for managing calls, voicemail, and other features. We use industry-standard practices and the latest technology to ensure high-quality installations for new and existing PBX systems.",

           },
    {
        img: img_5,
        title: "CCTV Security System Installation",
        desc: "Our expert technicians can install high-quality CCTV cameras and other security equipment to provide you with an effective and reliable security solution. Trust our team to design and install a customized CCTV system that meets your unique needs and budget.",

            },
    {
        img: img_6,
        title: "Conference System Installation",
        desc: "We use state-of-the-art technology and industry-standard practices to ensure that your conference system is installed to the highest standards, maximizing performance and reliability. Trust our team to design and install a customized conference system that meets your unique needs and budget.",
    },
    {
        img: img_6,
        title: "Data Center Air Condition System Installation",
        desc: "We use advanced technology and industry-standard practices to ensure that your air conditioning system is installed to the highest standards, maximizing performance and minimizing downtime.",
    },
    {
        img: img_6,
        title: "Fire Alarm & Fire Suppression System Installation",
        desc: " Our expert technicians can install high-quality fire alarm and suppression systems to provide you with a reliable and effective fire safety solution. Trust our team to design and install a customized fire safety system that meets your specific needs and budget. ",
    },
    {
        img: img_6,
        title: "Data Center & Backups Power System Installation",
        desc: "We specialize in providing top-notch installation services for data center and backup power systems to ensure seamless and efficient IT infrastructure performance. Our team of experts uses advanced technology and industry-standard practices to create customized power solutions that cater to your specific requirements and budget.",
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
            { rootMargin: "-100px" }
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
        <div className="home_services container" id="services" ref={ref}>
            <div className="title_sec">
                <p className="small_title">Services</p>
                <h3>Services We Provide</h3>
            </div>
            <div className="services">
                {DataServices.map((ser, i) => {
                    return (
                        <div key={i} className="service_item">
                            <div className="top">
                                <div className="img_wrapper">
                                    <img src={ser.thumbnail} />
                                </div>
                                <h5>{ser.title}</h5>
                            </div>
                            <div className="middle">
                                <p>{ser.shortDesc}</p>
                            </div>
                            <a href={`/services/${ser.id}`}>Explore More</a>
                        </div>
                    );
                })}
            </div>
            <div className="button_wrapper">
            <a href="/services"><button className="gl_button">Explore More</button></a>
            </div>
        </div>
    );
}
