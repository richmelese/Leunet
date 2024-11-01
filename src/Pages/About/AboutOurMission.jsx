import React from "react";
import img_3 from "../../Assets/about-us-3.jpeg";

export default function AboutOurMission() {
    return (
        <div className="about_our_mission">
            <div className="desc_section">
                <h3>Alliance Strategies</h3>
                <p>
                LeuNet ICT Solution is a profit-making company with the objective of increasing its global market coverage by maximizing profits and minimizing losses.
               <br/>
                Business concept: -We are a value-added ICT solution provider company that specializes in
                </p>
                <ul className="list">
                <p> • Providing Infrastructure & System Installation, Configuration & Support</p>
                <p> • Developing and implementing of Software & Hardware Product.</p>
                <p> • Firewalls, Routers, Switches, & Other networking and Data Center Products. etc</p>
                </ul>
            </div>
            <div className="image_section">
                <img src={img_3} />
            </div>
        </div>
    );
}
