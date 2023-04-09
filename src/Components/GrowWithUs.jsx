import React from "react";

export default function GrowWithUs({customClassName}) {
    return (
        <div className={`grow_with_us ${customClassName}` }>
            <div className="content_wrapper">
                <div className="title_sec">
                    <h3>Are you ready to grow your business with us?</h3>
                    <p className="small_title">Unlock your business's full potential with Leunet ICT Solution. Our comprehensive technology solutions, expert services, and personalized support can help you achieve your growth goals and stay ahead of the competition. Contact us today to learn how we can help you take your business to the next level.</p>
                   <a href="/contact-us"> <button className="gl_button">Contact us</button> </a>
                </div>
            </div>
        </div>
    );
}
