import React from "react";

export default function ServicesSubServiceStyle2({ parentId, childService }) {
    return (
        <div className="service_item_style_2">
            <div className="container">
                <div className="image_section">
                    <img src={childService.img} />
                </div>
                <div className="desc_section">
                    <h3>{childService.title}</h3>
                    <p>{childService.shortDesc}</p>
                    <a href={`${parentId}\\${childService.id}`} className="gl_button">
                        Learn More
                    </a>
                </div>
            </div>
            <div className="ptrn_1"></div>
            <div className="ptrn_2"></div>
            <div className="ptrn_3"></div>
            <div className="ptrn_4"></div>
            <div className="ptrn_5"></div>
            <div className="ptrn_6"></div>
        </div>
    );
}
