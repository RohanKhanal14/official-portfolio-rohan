import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import SocialMedia from "../../components/SocialMedia";
import Resume from "../../assets/resume/Rohan khanal resume .pdf"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">ROHAN</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text" style={{lineHeight:"0"}}>MERN Developer</p>
            <a
                className="content-download button-main button-scheme align-center p-text"
                href={Resume}
                download="Resume"
                role="button"
              >
                Download CV
              </a>
          </div>
            <SocialMedia />
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.mongo, images.express, images.react, images.node].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default Header;
