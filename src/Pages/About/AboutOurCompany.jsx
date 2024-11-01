import React from "react";
import img_1 from "../../Assets/about-us-1.png";
import img_2 from "../../Assets/about-us-2.jpeg";

export default function AboutOurCompany() {
    return (
        <div className="about_our_company">
            <div className="title_sec">
                <h3>About our company</h3>
                <p className="small_title">
                LeuNet ICT Solutions (LeuNet) is an information communication technology (ICT) service provider company registered as a privately owned limited company in Ethiopia in 2014 G.C
                </p>
            </div>
            <div className="image_section">
                <img src={img_1} />
                <img src={img_2} />
            </div>
            <div className="desc_section">
                <h5>What We Do</h5>
                <p>
                LeuNet is working by a partnership and collaboration with world-class international technology Products and service-provider Companies some lists are, Cisco, Dell APC, HPE, Tripplite, Fortinet, Huawei, and Other well-known companies to provide the best Enterprise solutions for the public sector, Governmental institutions, and private-owned clients with a scheduled and ahead of delivery time.
               <br/> LeuNet ICT Solution, customers are its ambassadors, who are the witnesses of the professionalism on the best solutions that we provide. Also, the company is working with our customers as a strategic developmental partner rather than short-term business dealing and benefit. In short, choosing LeuNet ICT Solutions is, already partnering with the excelled local technological company.
                </p>
            </div>
        </div>
    );
}
