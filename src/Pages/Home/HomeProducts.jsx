import React from "react";
import { useState, useRef, useEffect } from "react";
import img_1 from "../../Assets/home-product-1.png";
import img_2 from "../../Assets/home-product-2.png";
import img_3 from "../../Assets/home-product-3.png";

const products = [
    {
        img: img_1,
        name: "Lorem ipsum dolor sit amet consectetur",
    },
    {
        img: img_2,
        name: "Lorem ipsum dolor sit amet consectetur",
    },
    {
        img: img_3,
        name: "Lorem ipsum dolor sit amet consectetur",
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
        <div className="home_products container" ref={ref}>
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
