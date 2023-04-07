import React from "react";
import { useState, useRef, useEffect } from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

import img_1 from "../../Assets/sol-1.jpg";
import img_2 from "../../Assets/sol-2.jpg";
import img_3 from "../../Assets/sol-3.jpg";

const solutions = [
    {
        title: "ICT Consulting & 24x7 over a year Support",
        desc: "Our team of experts is always available to provide you with reliable and timely technical support, resolving issues promptly and minimizing downtime.We help you make informed decisions that align with your business goals and maximize your IT investments.",
    },
    {
        title: "Virtualization, Security & VPN Solutions",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.We provide top-notch Virtualization, Security, and VPN Solutions to help businesses enhance their IT infrastructure, improve security, and simplify operations. Our Virtualization solutions help reduce hardware costs, increase flexibility and efficiency, and improve disaster recovery. ",
    },
    {
        title: "Preventive & Corrective Maintenance",
        desc: "Preventive & Corrective Maintenance is a critical service that helps businesses ensure that their technology infrastructure operates at peak performance. Our team of experts provides proactive maintenance to identify potential issues before they become major problems, ensuring that your systems remain up and running smoothly. ",
    },
    {
        title: "Building Management System (BMS) Solutions",
        desc: " We leverage advanced technology and industry-standard practices to provide businesses with real-time monitoring, analysis, and control of building systems. Our BMS solutions are scalable, flexible, and cost-effective, making them suitable for businesses of all sizes.",
    },
    {
        title: "Disaster Recovery & Business Continuity Solutions",
        desc: "Disaster Recovery & Business Continuity Solutions are essential for businesses to ensure that they can continue operations in the event of a disruption or disaster. Our expert team can help businesses design and implement disaster recovery and business continuity plans that minimize downtime and ensure quick recovery. ",
    },
    {
        title: "ICT Usage & Security Policy Design & Implementation",
        desc: "ICT Usage & Security Policy Design & Implementation is a critical service that helps businesses establish and implement policies to protect their IT systems and data. Our expert team can help businesses develop and implement customized ICT usage and security policies that align with their business goals and regulatory requirements. ",
    },
    {
        title: "Data Center Infrastructure Management (DCIM) Solutions",
        desc: "Our DCIM solutions include advanced tools and technologies that help businesses manage power and cooling systems, reduce energy consumption, and optimize infrastructure utilization. We also provide analytics and reporting tools that help businesses make data-driven decisions about their data center operations.  ",
    },
];
export default function HomeSolutions() {
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
        <div className="home_solutions container" id="solutions" ref={ref}>
            <div className="title_sec">
                <p className="small_title">Solutions</p>
                <h3>Solutions We Provide</h3>
            </div>
            <div className="main_section">
                <div className="solutions_list">
                    <Accordion>
                        {solutions.map((sol, i) => {
                            return (
                                <AccordionItem key={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>{sol.title}</AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>{sol.desc}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                    <button className="gl_button">Show All</button>
                </div>
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
            </div>
        </div>
    );
}
