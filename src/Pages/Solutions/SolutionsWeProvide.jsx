import React from "react";
import img_1 from "../../Assets/sol-1.jpg";
import img_2 from "../../Assets/sol-2.jpg";
import img_3 from "../../Assets/sol-3.jpg";

export default function SolutionsWeProvide() {
    return (
        <div className="solutions_we_provide container">
            <div className="image_section">
                <div className="lft">
                    <img className="img_1" src={img_1} />
                    <img src={img_2} />
                </div>
                <div className="rit">
                    <div>
                        <img src={img_3} />
                    </div>
                </div>
            </div>
            <div className="title_sec">
                <p className="small_title">Products</p>
                <h3>Our Products</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in
                    felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi
                </p>
            </div>
        </div>
    );
}
