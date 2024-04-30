import React from "react";
import "./Navbar.scss";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
      </div>
      <ul className="app__navbar-links">
        <li>
          <Link className="app__flex p-text" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="app__flex p-text" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="app__flex p-text" to="/work">
            Work
          </Link>
        </li>
        <li>
          <Link className="app__flex p-text" to="/skill">
            Skills
          </Link>
        </li>
        <li>
          <Link className="app__flex p-text" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [150, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              <li>
                <Link className="app__flex p-text" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="app__flex p-text" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="app__flex p-text" to="/work">
                  Work
                </Link>
              </li>
              <li>
                <Link className="app__flex p-text" to="/skill">
                  Skills
                </Link>
              </li>
              <li>
                <Link className="app__flex p-text" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
