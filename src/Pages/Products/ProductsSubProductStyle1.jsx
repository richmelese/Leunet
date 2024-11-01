import React from "react";

export default function ProductsSubProductStyle1({parentId, childProduct }) {
    return (
        <div className="product_item_style_1 container">
            <div className="desc_section">
                <h3>{childProduct.title}</h3>
                <p>{childProduct.shortDesc}</p>
                <a href={`${parentId}\\${childProduct.id}`} className="gl_button">Learn More</a>
            </div>
            <div className="image_section">
                <img src={childProduct.img} />
            </div>
        </div>
    );
}
