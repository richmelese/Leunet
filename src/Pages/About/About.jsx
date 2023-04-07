import React from "react";
import AboutOurCompany from "./AboutOurCompany";
import AboutOurMission from "./AboutOurMission";
import AboutValues from "./AboutValues";
import FAQ from "../../Components/FAQ";
import GrowWithUs from "../../Components/GrowWithUs";
import DataCounter from "../../Components/DataCounter";

export default function About() {
    return (
        <div className="about container">
            <AboutOurCompany />
            <DataCounter />
            <AboutOurMission />
            <AboutValues />
            <FAQ />
            <GrowWithUs />
        </div>
    );
}
