import React from "react";
import "./Skill.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const skillAPI = [
  {
    name: "HTML",
    icon: images.html,
  },
  {
    name: "CSS",
    icon: images.css,
  },
  {
    name: "JavaScript",
    icon: images.javascript,
  },
  {
    name: "SCSS",
    icon: images.sass,
  },
  {
    name: "CPP",
    icon: images.cpp,
  },
  {
    name: "FIGMA",
    icon: images.figma,
  },
  {
    name: "GITHUB",
    icon: images.github,
  },
  {
    name: "MONGO",
    icon: images.mongo,
  },
  {
    name: "EXPRESS",
    icon: images.express,
  },
  {
    name: "REACT",
    icon: images.react,
  },
  {
    name: "NODE",
    icon: images.node,
  },
  {
    name: "REDUX",
    icon: images.redux,
  },
  {
    name: "BOOTSTRAP",
    icon: images.bootstrap,
  },
  {
    name: "TAILWIND",
    icon: images.tailwind,
  },
  {
    name: "MATERIAL UI",
    icon: images.mui,
  },
];

const Skill = () => {
  return (
    <>
      <div className="container vh-100" style={{ padding: "5rem 0 0 0" }}>
        <div className="row h-100">
          <div className="col-md-7 col-sm-12 ps-sm-2 mt-lg-auto  mb-auto">
            <h1 className="head-text" style={{ textAlign: "start" }}>
              MY <span>EXPERTISE</span>{" "}
            </h1>
            <p className="p-text">
              I'm a passionate web developer proficient in HTML, CSS,
              JavaScript, and various frameworks. With a keen eye for design and
              a commitment to clean, efficient code, I specialize in creating
              responsive, user-friendly websites that bring ideas to life.
              Explore my projects and let's collaborate on your next digital
              venture!
            </p>
          </div>
          <div className="col-md-5 col-sm-12">
            <div className="app__skills-container">
              <motion.div className="app__skills-list">
                {skillAPI.map((skill) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-item app__flex"
                    key={skill.name}
                  >
                    <div
                      className="app__flex"
                      style={{ backgroundColor: skill.bgColor }}
                    >
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                    <p className="p-text">{skill.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
