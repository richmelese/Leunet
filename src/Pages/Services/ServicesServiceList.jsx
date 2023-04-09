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
        desc: "Data and Telephone Structured Cabling refers to the installation of a standardized cabling infrastructure that supports the transmission of data, voice, and video signals within a building or campus. Leunet ICT Solution offers professional and reliable cabling solutions designed to ensure seamless connectivity and high-speed data transfer, using industry-standard technologies and equipment. Our team of certified technicians works closely with clients to assess their cabling requirements, design and install a customized cabling system, and provide ongoing maintenance and support to ensure optimal performance and reliability.",
    },
    {
        img: img_2,
        title: "IPTV System Installation",
        desc: "IPTV (Internet Protocol Television) System Installation involves the integration of TV broadcasting and video streaming services over an IP-based network. Leunet ICT Solution provides professional IPTV system installation services for homes, hotels, and businesses, utilizing cutting-edge technologies to deliver high-quality video content and on-demand entertainment. Our experienced technicians work closely with clients to design and install a customized IPTV system that meets their specific requirements, providing features such as interactive TV, video on demand, electronic program guides, and more. We also offer ongoing maintenance and support to ensure optimal performance and customer satisfaction.",
    },
    {
        img: img_3,
        title: "Wireless Access Points Installation",
        desc: "Wireless Access Points Installation involves the setup of network access points that enable wireless communication between devices and a network. Leunet ICT Solution provides expert wireless access points installation services for businesses of all sizes, using industry-leading equipment and technologies to ensure reliable and secure wireless connectivity. Our team of certified technicians will work with clients to assess their wireless networking needs, design and install a customized solution that maximizes coverage and performance, and provide ongoing maintenance and support to ensure optimal uptime and security. Whether you need a simple wireless network or a complex enterprise-level solution, Leunet ICT Solution has the expertise to meet your needs.",
    },
    {
        img: img_4,
        title: "Access Control System Installation",
        desc: "Access Control System Installation refers to the setup of an electronic security system that restricts access to a building, room, or area. Leunet ICT Solution offers professional access control system installation services for businesses of all types and sizes, utilizing advanced technologies to ensure the safety and security of employees and assets. Our team of certified technicians will work closely with clients to assess their security needs, design and install a customized access control system that meets their specific requirements, and provide ongoing maintenance and support to ensure optimal performance and reliability. Our access control systems can include features such as biometric authentication, video surveillance, and integration with other security systems for a comprehensive security solution.",
    },
    {
        img: img_5,
        title: "CCTV Security System Installation",
        desc: "CCTV (Closed Circuit Television) Security System Installation involves the setup of a surveillance system that utilizes cameras and video recorders to monitor and record activity in a specific area. Leunet ICT Solution offers professional CCTV security system installation services for businesses of all sizes, using high-quality cameras and recording equipment to provide reliable and effective security monitoring. Our team of certified technicians will work with clients to assess their security needs, design and install a customized CCTV system that maximizes coverage and performance, and provide ongoing maintenance and support to ensure optimal uptime and security. Our CCTV systems can also include features such as remote access and monitoring, motion detection, and integration with other security systems for a comprehensive security solution.",
    },
    {
        img: img_6,
        title: "PBX System Installation",
        desc: "PBX (Private Branch Exchange) System Installation refers to the setup of an on-premises phone system that enables internal communication and external call routing for businesses. Leunet ICT Solution provides expert PBX system installation services, utilizing industry-standard technologies and equipment to deliver reliable and efficient phone communication. Our team of certified technicians will work closely with clients to assess their communication needs, design and install a customized PBX system that meets their specific requirements, and provide ongoing maintenance and support to ensure optimal performance and reliability. Our PBX systems can include features such as voicemail, call forwarding, auto-attendant, and integration with other communication systems for a comprehensive solution.",
    },
];

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
