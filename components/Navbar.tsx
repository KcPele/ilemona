import React, { useState } from "react";
import Image from "next/image";
import { logo } from "../assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar section__padding">
      <div className="navbar__container ">
        <div className="navbar__container-logo">
          <div className="navbar__container-logo__image">
            <Image src={logo} alt="logo" width="24px" height="25px" />
          </div>
          <h1 className="navbar__container-logo_header">Ilemona</h1>
        </div>

        <ul className="navbar__container-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      {/* <div className="navbar__auth">
        <a className="navbar__auth-login" href="#">
          Login
        </a>
        <a className="navbar__auth-signup" href="#">
          Sign Up
        </a>
      </div> */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#4A4A50"
          fontSize={27}
          className="overlay__open"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay scale-up-center">
            <CgClose
              fontSize={33}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <div className="navbar__container-smallscreen__links">
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#blog">Blog</a>
              <a href="#about">About</a>
            </div>
            {/* <div className="navbar__auth-smallscreen">
              <a className="navbar__auth-smallscreen__login" href="#">
                Login
              </a>
              <a className="navbar__auth-smallscreen__signup" href="#">
                Sign Up
              </a>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
