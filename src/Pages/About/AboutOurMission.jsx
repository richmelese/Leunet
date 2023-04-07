import React from "react";
import img_3 from "../../Assets/about-us-3.jpeg";

export default function AboutOurMission() {
    return (
        <div className="about_our_mission">
            <div className="desc_section">
                <h3>Our Mission</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra Ld eu aliquet diam lorem viverra at justo. Nulla odio
                    nequefjf gravida in pharetra egestas. Ac id sagittis at morbi interdum nibh diam sagittis et. Lorem ipsum dolor sit
                    amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra
                    egestas.
                </p>
            </div>
            <div className="image_section">
                <img src={img_3} />
            </div>
        </div>
    );
}
