import "./Work.scss";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";

const WorkAPI = [
  {
    title: "FOODCART",
    description: "This is FOODCART project using React for frontend and dummy api for functionality.",
    imageUrl: images.foodcart,
    gitUrl: "https://github.com/RohanKhanal14/foodcart.git",
  },
  {
    title: "EXPENSE TRACKER",
    description: "This is EXPENSE TRACKER project that calculates daily expenses using React.",
    imageUrl: images.expensetracker,
    gitUrl: "https://github.com/RohanKhanal14/expense-tracker.git",
  },
  {
    title: "TODO APP",
    description: "This is a simple TASK MAMAGEMENT app using react and mongoDB for storing data.",
    imageUrl: images.todo,
    gitUrl: "https://github.com/RohanKhanal14/TaskManagementSystem.git",
  },
  {
    title: "WEATHER APP",
    description: "This is a simple WEATHER APP using react and openweather api for fetching data.",
    imageUrl: images.weather,
    gitUrl: "https://github.com/RohanKhanal14/Weather-app.git",
  },
  {
    title: "WEBSITE 1",
    description: "My first website using html, css and javascript.",
    imageUrl: images.website1,
    gitUrl: "https://github.com/RohanKhanal14/Simple_website_html_css_js.git",
  },
  {
    title: "WEBSITE 2",
    description: "My portfolio website using html and css.",
    imageUrl: images.website2,
    gitUrl: "https://github.com/RohanKhanal14/Portfolio_website_html_css.git",
  },
];
const Work = () => {
  return (
    <>
      <div className="app__works">
        <h2 className="head-text">
          SOME OF MY <span>WORK</span>
        </h2>

        <motion.div
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {WorkAPI.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={work.imageUrl} alt={work.title} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.gitUrl} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p
                  className="p-text"
                  style={{ marginTop: 10, textAlign: "center" }}
                >
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Work;
