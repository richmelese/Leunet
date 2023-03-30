import React from "react";
import dashboard_img from "../../Assets/dashboard.png";

export default function HomeCollage() {
    return (
        <div className="home_collage container">
            <div className="ptrn_1"></div>
            <div className="message_section">
                <h1>Lorem ipsum dolor sit amet consectetur</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit 
interdum ullamcorper sed pharetra sene.</p>
                <button className="gl_button">
                    Get Started
                </button>
            </div>
            <div className="image_section">
                <img src={dashboard_img} alt="dashboard" />
            </div>
            <div className="ptrn_2"></div>
            <div className="ptrn_3"></div>

        </div>
    );
}
