import React from "react";
import { useState, useRef, useEffect } from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

import img_1 from "../../Assets/sol-1.jpg";
import img_2 from "../../Assets/sol-2.jpg";
import img_3 from "../../Assets/sol-3.jpg";

const solutions = [
    {
        title: "ICT Consulting & 24x7 over a year Support",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.",
    },
    {
        title: "Virtualization, Security & VPN Solutions",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.",
    },
    {
        title: "Preventive & Corrective Maintenance",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.",
    },
    {
        title: "Building Management System (BMS) Solutions",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.",
    },
    {
        title: "Disaster Recovery & Business Continuity Solutions",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.",
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
        <div className="home_solutions container" ref={ref}>
            <div className="title_sec">
                <p className="small_title">Services</p>
                <h3>Services We Provide</h3>
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
