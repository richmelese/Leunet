import React from "react";
import { useState, useRef, useEffect } from "react";
import img_1 from "../../Assets/home-product-1.png";
import img_2 from "../../Assets/home-product-2.png";
import img_3 from "../../Assets/home-product-3.png";

const products = [
    {
        img: img_1,
        name: "Bullet cameras: weather-resistant and can capture high-quality images even in low light conditions. ipsum dolor sit amet consectetur",
    },
    {
        img: img_2,
        name: "PTZ cameras: these cameras can be controlled remotely to pan, tilt, and zoom in on specific areas of interest",
    },
    {
        img: img_3,
        name: "Dome cameras: can rotate 360 degrees and are often installed on ceilings, making them difficult to tamper with",
    },
];
export default function HomeProducts() {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-200px" }
        );
        console.log(ref);
        console.log(isIntersecting);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("*").forEach((el) => {
                el.classList.add("slide-in");
            });
        }
    }, [isIntersecting]);

    return (
        <div className="home_products container" id="products" ref={ref}>
            <div className="title_sec">
                <p className="small_title">Products</p>
                <h3>Our Products</h3>
            </div>
            <div className="main_section">
                {
                    products.map((prod, i) => {
                        return (
                            <div key={i} className="product">
                                <img src={prod.img} />
                                <p>{prod.name}</p>
                                <a href="#">Explore More</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
