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
        console.log(ref);
        console.log(isIntersecting);
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

    // function ContactForm() {
    //     const [name, setName] = useState('');
    //     const [email, setEmail] = useState('');
    //     const [subject, setSubject] = useState('');
    //     const [message, setMessage] = useState('');
      
        // const handleSubmit = (e) => {
        //   e.preventDefault();
         
          // Send message to Telegram bot using Node.js backend
//           const Telegraf = require('telegraf');

// // Replace YOUR_BOT_TOKEN with your own Telegram bot token
// const bot = new Telegraf('5867016372:AAHKEoNZxJJcl8RlKfhx6bZraL0gQG00XSU');

// // Replace YOUR_CHAT_ID with your own Telegram chat ID
// const chatId = '417481614';

// bot.start((ctx) => ctx.reply('Hello!'));

// bot.on('message', (ctx) => {
//   const name = ctx.update.message.from.first_name;
//   const message = `New message from ${name}\n\nName: ${ctx.update.message.text}\nEmail: ${ctx.update.message.text}\nSubject: ${ctx.update.message.text}\nMessage: ${ctx.update.message.text}`;
//   bot.telegram.sendMessage(chatId, message);
// });

// bot.launch();
       // }
    return (
        <div className="footer" id="contact" ref={ref}>
            <div className="container">
                <div className="info_section">
                    <img src={logo} />
                    <p>We welcome you to visit us and learn more about our services and solutions. Our team of experts will be happy to give you a tour of our facilities and answer any questions you may have. </p>
                    <div className="email_section">
                        <div className="image_wrapper">
                            <img src={envelope} />
                        </div>

                        <div className="email_us">
                            <p>Email US</p>
                            <a href="mailto:contact@leunetict.com">contactus@leunetict.com</a>
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
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#services">Services</a>
                                </li>
                                <li>
                                    <a href="#solutions">Solutions</a>
                                </li>
                                <li>
                                    <a href="#products">Products</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contact_us_form">
                    <h5>Request A Quote - Let's work together</h5>
                    <p>Contact us today to learn more about our services and how we can help your business thrive.</p>
                    <form>
                    <div className="form">
                        <div className="top">
                            <div>
                                <label>Name</label>
                                <input placeholder="Full Name" type="text" id="name" required />
                            </div>
                            <div>
                                <label>Email</label>
                                <input placeholder="Email address" required />
                            </div>
                        </div>
                        <div className="middle">
                            <label>Subject</label>
                            <input placeholder="Subject Line" id="subject" required />
                        </div>
                        <div className="bottom">
                            <label>Message</label>
                            <textarea placeholder="Tell us about your project..." id="message" required></textarea>
                        </div>
                        <button className="gl_button" type="submit">Submit</button>
                    </div>
                    </form>
                </div>
            </div>

            <div className="ptrn_1"></div>
            <div className="ptrn_2"></div>
        </div>
    );
}
//}