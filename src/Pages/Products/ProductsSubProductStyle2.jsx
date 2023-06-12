import React from "react";

export default function ProductsSubProductStyle2({ parentId, childProduct }) {
    return (
        <div className="product_item_style_2">
            <div className="container">
                <div className="image_section">
                    <img src={childProduct.img} />
                </div>
                <div className="desc_section">
                    <h3>{childProduct.title}</h3>
                    <p>{childProduct.shortDesc}</p>
                    <a href={`${parentId}\\${childProduct.id}`} className="gl_button">
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
