import React from "react";
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

export default function ProductList() {
    return (
        <div className="product_list">
            {products.map((prod, i) => {
                return (
                    <div key={i} className="product">
                        <img src={prod.img} />
                        <p>{prod.name}</p>
                        <button className="gl_button">
                            Get Quote
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
