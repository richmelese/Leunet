import React from "react";

export default function GrowWithUs({customClassName}) {
    return (
        <div className={`grow_with_us ${customClassName}` }>
            <div className="content_wrapper">
                <div className="title_sec">
                    <h3>Are you ready to grow your business with us?</h3>
                    <p className="small_title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                    <button className="gl_button">Contact Us</button>
                </div>
            </div>
        </div>
    );
}
