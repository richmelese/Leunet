import React from "react";

export default function ServicesSubServiceStyle1({parentId, childService }) {
    return (
        <div className="service_item_style_1 container">
            <div className="desc_section">
                <h3>{childService.title}</h3>
                <p>{childService.shortDesc}</p>
                <a href={`${parentId}\\${childService.id}`} className="gl_button">Learn More</a>
            </div>
            <div className="image_section">
                <img src={childService.img} />
            </div>
        </div>
    );
}
