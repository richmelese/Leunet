import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const faqs = [
  {
    title: "What services doesLeuNet ICT Solution offer?",
    desc: "LeuNet ICT Solution provides a wide range of technology services, including IT consulting, network design and installation, software development, cybersecurity, cloud solutions, and managed IT services.",
  },
  {
    title: "IsLeuNet ICT Solution suitable for small businesses",
    desc: "Yes,LeuNet ICT Solution caters to businesses of all sizes. Our flexible and scalable solutions are tailored to meet the specific needs of small and medium-sized enterprises (SMEs) as well as larger corporations.",
  },
  {
    title: "How doesLeuNet ICT Solution ensure data security",
    desc: "AtLeuNet ICT Solution, we take data security very seriously. We use the latest encryption and authentication technologies, implement robust access controls, conduct regular security audits, and adhere to industry best practices to safeguard our clients' data.",
  },
  {
    title: "DoesLeuNet ICT Solution offer 24/7 support?",
    desc: "Yes, we provide round-the-clock support to our clients through various channels such as phone, email, and chat. Our team of experienced technicians is always ready to assist you with any IT issues or concerns.",
  },
  {
    title: "How can I get started withLeuNet ICT Solution?",
    desc: "To get started withLeuNet ICT Solution, simply contact us through our website or give us a call. We will schedule a consultation to discuss your business needs and provide you with a customized solution that fits your budget and requirements.",
  },
];

export default function FAQ({ customClassName }) {
  return (
    <div className={`faq ${customClassName}`}>
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
          Get quick answers to common queries and concerns with our website's
          frequently asked questions (FAQ) section.
        </p>
      </div>
    </div>
  );
}
