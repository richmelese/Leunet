import React from "react";
import AboutOurCompany from "./AboutOurCompany";
import AboutOurMission from "./AboutOurMission";
import AboutDataCounter from "./AboutDataCounter";
import AboutValues from "./AboutValues";
import AboutFAQ from "./AboutFAQ";
import GrowWithUs from "../../Components/GrowWithUs";

export default function About() {
    return (
        <div className="about container">
            <AboutOurCompany />
            <AboutDataCounter />
            <AboutOurMission />
            <AboutValues />
            <AboutFAQ />
            <GrowWithUs />
        </div>
    );
}
