import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import DataServices from "../../Data/DataServices";
import img_1 from "../../Assets/ser-db-icon.png";
import img_2 from "../../Assets/ser-iptv-icon.png";
import img_3 from "../../Assets/ser-wifi-icon.png";
import img_4 from "../../Assets/ser-access-ctrl-icon.png";
import img_5 from "../../Assets/ser-cctv-icon.png";
import img_6 from "../../Assets/ser-pbx-icon.png";

const dropDownList = [
    {
        id: 1, 
        img: img_1,
        title: "Data & Telephone Structured Cabling",
    },
    {
        id: 2,
        img: img_2,
        title: "IPTV System Installation",
    },
    {
        id: 3,
        img: img_3,
        title: "Wireless Access Points Installation",
    },
    {
        id: 4,
        img: img_4,
        title: "Access Control System Installation",
    },
    {
        id: 5,
        img: img_5,
        title: "CCTV Security System Installation",
    },
    {
        id: 6,
        img: img_6,
        title: "PBX System Installation",
    },
];

export default function MenuItemServices() {
    const [currentDropDownMenuOpen, setCurrentDropDownMenuOpen] = useState(false);

    const hideDropDown = (func) => {
        setTimeout(() => {
            func(false);
        }, 500);
    };

    return (
        <>
            <li className="hasdropdown" onMouseOver={() => setCurrentDropDownMenuOpen(true)} onMouseOut={() => hideDropDown(setCurrentDropDownMenuOpen)}>
                <a href="/Services">Services</a>
            </li>
            <DropDownMenu
                currentDropDownMenuOpen={currentDropDownMenuOpen}
                hideDropDown={hideDropDown}
                title="Services We Provide"
                dropDownList={DataServices}
                exploreMoreLink={"/Services"}
            />
        </>
    );
}
