import React from "react";
import AboutOurCompany from "./AboutOurCompany";
import AboutOurMission from "./AboutOurMission";
import AboutDataCounter from "./AboutDataCounter";
import AboutValues from "./AboutValues";
import AboutFAQ from "./AboutFAQ";

export default function About() {
    return (
        <div className="about container">
            <AboutOurCompany />
            <AboutDataCounter />
            <AboutOurMission />
            <AboutValues />
            <AboutFAQ />
        </div>
    );
}
