import React from "react";
import dashboard_img from "../../Assets/dashboard.png";

export default function HomeCollage() {
    return (
        <div className="home_collage container" id="home" >
            <div className="ptrn_1"></div>
            <div className="message_section">
                <h1>LeuNet ICT Solutions</h1>
                <p>LeuNet ICT Solutions (LeuNet) is an information communication technology (ICT) service provider company registered as a privately owned limited company in Ethiopia in 2014 G.C</p>
                <a href="/about"><button className="gl_button">
                    Get Started
                </button></a>
            </div>
            <div className="image_section">
                <img src={dashboard_img} alt="dashboard" />
            </div>
            <div className="ptrn_2"></div>
            <div className="ptrn_3"></div>

        </div>
    );
}
