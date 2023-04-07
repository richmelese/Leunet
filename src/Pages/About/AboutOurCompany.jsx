import React from "react";
import img_1 from "../../Assets/about-us-1.png";
import img_2 from "../../Assets/about-us-2.jpeg";

export default function AboutOurCompany() {
    return (
        <div className="about_our_company">
            <div className="title_sec">
                <h3>About our company</h3>
                <p className="small_title">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.
                </p>
            </div>
            <div className="image_section">
                <img src={img_1} />
                <img src={img_2} />
            </div>
            <div className="desc_section">
                <h5>What We Do</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Gravida cursus convallis tempor placerat id in non iaculis quisque. Sagittis in
                    felis duis netus. Faucibus congue leo libero egestas. Montes netus morbi id enim sollicitudin egestas. Morbi aliquam sit
                    congue ullamcorper volutpat. Eu vestibulum phasellus massa est volutpat. Facilisis amet enim blandit donec maecenas.
                    Sodales integer bibendum in eget id volutpat et in quis. Id dictum est pharetra rhoncus phasellus velit. Odio sit in
                    sociis urna donec morbi consequat eu at. Auctor nunc ornare eget ut sed. Sit volutpat netus at euismod. Et erat.
                </p>
            </div>
        </div>
    );
}
