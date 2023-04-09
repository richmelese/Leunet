import React from "react";
import img_1 from "../../Assets/home-product-1.png";
import img_2 from "../../Assets/home-product-2.png";
import img_3 from "../../Assets/home-product-3.png";
import img_4 from "../../Assets/home-product-4.png";
import img_5 from "../../Assets/home-product-5.png";
import img_6 from "../../Assets/home-product-6.png";
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
    
    {
        img: img_4,
        name: "Leunet ICT Solution offers a wide range of server hardware and storage solutions to meet the diverse needs of businesses and organizations of all sizes.",
    },
    {
        img: img_5,
        name: "Leunet ICT Solution offers a range of wireless communication equipment, including directional and omnidirectional antennas, wireless bridges, and wireless access points, to deliver secure and high-performance wireless networking solutions.",
    },
    {
        img: img_6,
        name: "Leunet ICT Solution offers a range of networking equipment from top-tier manufacturers to ensure fast and seamless communication across your network.",
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
                      <a href="/contact-us">  <button className="gl_button"> 
                            Get Quote
                        </button></a>
                    </div>
                );
            })}
        </div>
    );
}
