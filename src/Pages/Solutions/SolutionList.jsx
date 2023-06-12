import React from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

const solutions = [
    {
        title: "ICT Consulting & 24x7 over a year Support",
        desc: "Our team of experts is always available to provide you with reliable and timely technical support, resolving issues promptly and minimizing downtime.We help you make informed decisions that align with your business goals and maximize your IT investments.",
    },
    {
        title: "Virtualization, Security & VPN Solutions",
        desc: "Leunet ICT Solution offers Virtualization, Security & VPN Solutions to provide businesses with secure, reliable, and scalable technology infrastructure. Our virtualization solutions enable businesses to optimize their IT resources, streamline operations, and reduce costs by creating multiple virtual machines on a single physical server",
    },
    {
        title: "Preventive & Corrective Maintenance",
        desc: "Preventive & Corrective Maintenance is a critical service that helps businesses ensure that their technology infrastructure operates at peak performance. Our team of experts provides proactive maintenance to identify potential issues before they become major problems, ensuring that your systems remain up and running smoothly.",
    },
    {
        title: "Building Management System (BMS) Solutions",
        desc: "We leverage advanced technology and industry-standard practices to provide businesses with real-time monitoring, analysis, and control of building systems. Our BMS solutions are scalable, flexible, and cost-effective, making them suitable for businesses of all sizes.",
    },
    {
        title: "Disaster Recovery & Business Continuity Solutions",
        desc: "Disaster Recovery & Business Continuity Solutions are essential for businesses to ensure that they can continue operations in the event of a disruption or disaster. Our expert team can help businesses design and implement disaster recovery and business continuity plans that minimize downtime and ensure quick recovery.",
    },
];

export default function SolutionList() {
    return (
        <div className="solutions_solutions_list">
            <div className="container">
                <Accordion>
                    {solutions.map((sol, i) => {
                        return (
                            <AccordionItem >
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
            </div>

            <div className="ptrn_1"></div>
            <div className="ptrn_2"></div>
            <div className="ptrn_3"></div>
            <div className="ptrn_4"></div>
            <div className="ptrn_5"></div>
            <div className="ptrn_6"></div>
        </div>
    );
}
