import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";

export default function MenuItemSolutions() {
    const [currentDropDownMenuOpen, setCurrentDropDownMenuOpen] = useState(false);


    const hideDropDown = () => {
        setTimeout(() => {
            setCurrentDropDownMenuOpen(false);
        }, 500);
    };


    return (
        <li onMouseEnter={() => setCurrentDropDownMenuOpen(1)} onMouseLeave={() => hideDropDown()}>
            <a href="/Solutions">Solutions</a>
            {/* {currentDropDownMenuOpen && <DropDownMenu />} */}
        </li>
    );
}
