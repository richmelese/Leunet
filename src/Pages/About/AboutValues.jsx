import React from "react";
import img_1 from "../../Assets/about-us-values-1.svg";
import img_2 from "../../Assets/about-us-values-2.svg";
import img_3 from "../../Assets/about-us-values-3.svg";
import img_4 from "../../Assets/about-us-values-4.svg";
const valuesList = [
    {
        img: img_1,
        title: "Data & Telephone Structured Cabling",
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece.",
    },
    {
        img: img_2,
        title: "Data & Telephone Structured Cabling",
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece.",
    },
    {
        img: img_3,
        title: "Data & Telephone Structured Cabling",
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece.",
    },
    {
        img: img_4,
        title: "Data & Telephone Structured Cabling",
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece.",
    },
];

export default function AboutValues() {
    return (
        <div className="about_values">
            <div className="title_sec">
                <p className="small_title">Our values</p>
                <h3>The story and values behind our company</h3>
            </div>
            <div className="values">
                {valuesList.map((ser, i) => {
                    return (
                        <div key={i} className="value_item">
                            <div className="left">
                                <div className="img_wrapper">
                                    <img src={ser.img} />
                                </div>
                            </div>
                            <div className="right">
                                <h5>{ser.title}</h5>
                                <p>{ser.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
