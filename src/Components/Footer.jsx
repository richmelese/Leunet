import React from "react";
import { useState, useRef, useEffect } from "react";
import logo from "../Assets/logo.png";

import envelope from "../Assets/Envelope.png";
import fb from "../Assets/fb.svg";
import fb_hover from "../Assets/fb copy.svg";
import tw from "../Assets/tw.svg";
import tw_hover from "../Assets/tw copy.svg";
import li from "../Assets/linked-in.svg";
import li_hover from "../Assets/linked-in copy.svg";
import ins from "../Assets/insta.svg";
import ins_hover from "../Assets/insta copy.svg";

export default function Footer() {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-200px" }
        );
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("*").forEach((el) => {
                el.classList.add("slide-in");
            });
        }
    }, [isIntersecting]);


    return (
        <div className="footer" ref={ref}>
            <div className="container">
                <div className="info_section">
                    <img src={logo} />
                    <p>Aenean vestibulum felis nec egestas fringilla. Duis non felis onsequat, varius sapien convallis, tincidunt nisl. </p>
                    <div className="email_section">
                        <div className="image_wrapper">
                            <img src={envelope} />
                        </div>

                        <div className="email_us">
                            <p>Email US</p>
                            <a href="mailto:info@leunet.com">info@leunet.com</a>
                        </div>
                    </div>
                    <div className="social_nav_container">
                        <div className="social_media">
                            <p>Connect With Us</p>
                            <div className="link_wrapper">
                                <a href="#" className="fb">
                                    <div className="image_wrapper">
                                        <img src={fb} />
                                        <img src={fb_hover} className="hover_state" />
                                    </div>
                                </a>

                                <a href="#" className="tw">
                                    <div className="image_wrapper">
                                        <img src={tw} />
                                        <img src={tw_hover} className="hover_state" />
                                    </div>
                                </a>

                                <a href="#" className="li">
                                    <div className="image_wrapper">
                                        <img src={li} />
                                        <img src={li_hover} className="hover_state" />
                                    </div>
                                </a>

                                <a href="#" className="ins">
                                    <div className="image_wrapper">
                                        <img src={ins} />
                                        <img src={ins_hover} className="hover_state" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="footer_nav">
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/">Services</a>
                                </li>
                                <li>
                                    <a href="/">Solutions</a>
                                </li>
                                <li>
                                    <a href="/">Products</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contact_us_form">
                    <h5>Request A Quote - Let's work together</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.</p>
                    <div className="form">
                        <div className="top">
                            <div>
                                <label>Name</label>
                                <input placeholder="Full Name"/>
                            </div>
                            <div>
                                <label>Email</label>
                                <input placeholder="Email address"/>
                            </div>
                        </div>
                        <div className="middle">
                            <label>Subject</label>
                            <input placeholder="Subject Line"/>
                        </div>
                        <div className="bottom">
                            <label>Message</label>
                            <textarea placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button className="gl_button">Request A Quote</button>
                    </div>
                </div>
            </div>

            <div className="ptrn_1"></div>
            <div className="ptrn_2"></div>
        </div>
    );
}
