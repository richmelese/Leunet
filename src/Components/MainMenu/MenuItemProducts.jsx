import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import DataProducts from "../../Data/DataProducts";

export default function MenuItemProducts() {
    const [currentDropDownMenuOpen, setCurrentDropDownMenuOpen] = useState(false);


    const hideDropDown = () => {
        setTimeout(() => {
            setCurrentDropDownMenuOpen(false);
        }, 500);
    };

    return (
        <>
            <li className="hasdropdown" onMouseOver={() => setCurrentDropDownMenuOpen(true)} onMouseOut={() => hideDropDown(setCurrentDropDownMenuOpen)}>
                <a href="/Products">Products</a>
            </li>
            <DropDownMenu
                currentDropDownMenuOpen={currentDropDownMenuOpen}
                hideDropDown={hideDropDown}
                title="Our Products"
                dropDownList={DataProducts}
                exploreMoreLink={"/Products"}
            />
        </>
    );
}
