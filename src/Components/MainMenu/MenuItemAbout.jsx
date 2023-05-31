import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";

export default function MenuItemAbout() {
    const [currentDropDownMenuOpen, setCurrentDropDownMenuOpen] = useState(false);

    const hideDropDown = () => {
        setTimeout(() => {
            setCurrentDropDownMenuOpen(false);
        }, 500);
    };

    return (
        <li onMouseEnter={() => setCurrentDropDownMenuOpen(1)} onMouseLeave={() => hideDropDown()}>
            <a href="/about">About</a>
        </li>
    );
}
