import React from "react";
import email_us from "../../Assets/email_icon_contact_us_page.svg";
import call_us from "../../Assets/call_icon_contact_us_page.svg";
import ContactFooter from "../../Components/ContactFooter";

export default function ContactUs() {
  return (
    <div>
      <div className="contact_us_page container">
        <div className="title_sec">
          <h3>Get in touch today!</h3>
        </div>
        <div className="top_info">
          <div className="card">
            <div>
              <img src={email_us} />
              <p>Mail Us</p>
            </div>
            <a href="mailto:contactus@leunet.com">contact@leunetict.com</a>
          </div>
          <div className="card">
            <div>
              <img src={call_us} />
              <p>Call Us</p>
            </div>
            <a href="tel:+251911257527">+251116393950/51</a>
          </div>
        </div>

        <div className="contact_us_form">
          <div className="form">
            <div className="top">
              <div>
                <label>Name</label>
                <input placeholder="Full Name" />
              </div>
              <div>
                <label>Email</label>
                <input placeholder="Email address" />
              </div>
            </div>
            <div className="middle">
              <label>Subject</label>
              <input placeholder="Subject Line" />
            </div>
            <div className="bottom">
              <label>Message</label>
              <textarea placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="gl_button">Send A Message</button>
          </div>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
}
