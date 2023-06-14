import React from "react";
// import "../../src/Styles/ContactFooter.css";
import FooterBg from "../Assets/footer-bg.png";
import Footer from "./Footer";
import FooterLog from "../Assets/logo.png";
import Emial from "../Assets/emial.png";
import fb from "../Assets/fb.png";
import Link from "../Assets/link.png";
import Inst from "../Assets/inst.png";
const ContactFooter = () => {
  return (
    <div
      className="FooterBG__imgs"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className="Secoond__footer__container">
        <div className="Sub__container">
          <img src={FooterLog} alt="" />
          <p>
            We welcome you to visit us and learn more about our services and
            solutions. Our team of experts will be happy to give you a tour of
            our facilities and answer any questions you may have.{" "}
          </p>
          <div className="Email__container">
            <div>
              {" "}
              <img src={Emial} alt="" />
            </div>
            <div>
              <h1>Email us</h1>
              <h3>contact@leunetict.com</h3>
            </div>
          </div>
        </div>
        <div className="Quick__links">
          <ul>
            <h4>Quick Links</h4>
            <li>
              {" "}
              <a href="/home">Home</a>
            </li>
            <li>
              {" "}
              <a href="/about">About</a>
            </li>
            <li>
              {" "}
              <a href="/services">Services</a>
            </li>
            <li>
              {" "}
              <a href="/solutions">Solutions</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact-us">Contact</a>
            </li>
          </ul>
        </div>
        <div className="Social__Media__container">
          <ul className="New">
            <a href="https://www.facebook.com/LeulMM">
              <li>
                <img src={fb} alt="" />
              </li>
            </a>
            <li>
              <a href="#">
                <img src={Link} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/leunet_ict_solutions/">
                <img src={Inst} alt="" />
              </a>
            </li>{" "}
          </ul>
        </div>
      </div>
      <div className="Second__bitapps">
        <h1 className="Bittaps__Text">
          © 2023 | Designed and developed by{" "}
          <a href="https://bitappstech.com/">bitappstech</a>
        </h1>
      </div>
    </div>
  );
};

export default ContactFooter;
