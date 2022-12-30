import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import ContactFooter from "./ContactFooter";
const Footer = () => {
  return (
    <div className="footer__container section__padding flex__wrapper-container">
      <ContactFooter />
      <div className="footer__container-copyright ">
        <p style={{ color: "#9795B7" }} className="app__p">
          Copyright © 2022 Ilemona
        </p>
        <div className="footer__icons flex__wrapper-container">
          <BsFacebook size={28} />
          <BsTwitter size={28} />
          <AiFillInstagram size={28} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
