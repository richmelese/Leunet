import React from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

const faqs = [
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

export default function FAQ({customClassName}) {
    return (
        <div className={`faq ${customClassName}` }>
            <div className="faq_list">
                <Accordion>
                    {faqs.map((faq, i) => {
                        return (
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>{faq.title}</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>{faq.desc}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
            <div className="title_sec">
                <h3>Frequestly Asked Questions</h3>
                <p className="small_title">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                </p>
            </div>
        </div>
    );
}
