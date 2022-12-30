import React from "react";
import Image from "next/image";
import { solex, video } from "../assets";
import { WiDirectionRight } from "react-icons/wi";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.7 }}
      id="home"
      className="header__content section__padding"
    >
      <div className="header__content-text">
        <h3 className="">
          Hello, Welcome to the Building Greatness with ILEMONA (B.G.I) website.
        </h3>
        <div className="header__context-subsection">
          <p>
            We bring you into the world of Elites, Mentors, School Executives,
            Founders and Students whose lives and works overtime would be a
            source of inspiration and motivation to you, therefore building the
            GREATNESS in you.
          </p>
          <div className="header__context-button flex__wrapper">
            <button className=" app__btn_white">Get Started</button>
            <button className="btn__learn-more app__btn_puple">
              Learn More <WiDirectionRight size={24} />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="header__content-video">
        <Image
          className="header__content-video_img"
          src={solex}
          alt="vidio"
          width="523px"
          height="344px"
        />
      </div>
    </motion.div>
  );
};

export default Header;
