import React from "react";

import HomeChooseUs from "./HomeChooseUs";
import HomeCollage from "./HomeCollage";
import HomeProducts from "./HomeProducts";
import HomeServices from "./HomeServices";
import HomeSolutions from "./HomeSolutions";
import HomeTestimonial from "./HomeTestimonial";

export default function Home() {
    return (
        <div className="home">
            <HomeCollage />

            <HomeChooseUs />
            <HomeServices />
            <HomeTestimonial />
            <HomeSolutions />
            <HomeProducts />
        </div>
    );
}
