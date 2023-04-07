import React from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

const solutions = [
    {
        title: "ICT Consulting & 24x7 over a year Support",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.",
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
