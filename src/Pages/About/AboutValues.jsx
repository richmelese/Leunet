import React from "react";
import img_1 from "../../Assets/about-us-values-1.svg";
import img_2 from "../../Assets/about-us-values-2.svg";
import img_3 from "../../Assets/about-us-values-3.svg";
import img_4 from "../../Assets/about-us-values-4.svg";
const valuesList = [
    {
        img: img_1,
        title: "Effective and efficient solutions",
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece.",
    },
    {
        img: img_2,
        title: "Lower prices while providing quality services",
        desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece.",
    },
    {
        img: img_3,
        title: "Up-to-date products",
        desc: "Up-to-date products with minimum cost but these products are usually accompanied by an informational, instructional training session provided by the consultant.",
    },
    {
        img: img_4,
        title: "Hiring and training better",
        desc: "Hiring and training better candidates become an immeasurable competitive advantage for a company.",
    },

    {
        img: img_1,
        title: "A brand image",
        desc: "A brand image that took us a significant amount of time to build.",
    },
    {
        img: img_2,
        title: "Process innovation",
        desc: "Process innovation is anything new or novel about the way our company operates.",
    },
    {
        img: img_3,
        title: "Achievement",
        desc: "The achievement of competitive advantage is not always permanent or even long-lasting.",
    },
    {
        img: img_4,
        title: "Adopt new Technologies",
        desc: "The technology adoption lifecycle is a sociological model that describes the adoption or acceptance of a new product or innovation.",
    },
];

export default function AboutValues() {
    return (
        <div className="about_values">
            <div className="title_sec">
                <p className="small_title">Business competitiveness:</p>
                <h4>LeuNet ICT Solutions offers the consumer a greater value than the competitors, such as</h4>
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
