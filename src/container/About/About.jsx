import { images } from "../../constants";
import "./About.scss";

// const abouts = [
//   {
//     title: "MONGO DB",
//     description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     imageUrl: images.mongo,
//   },
//   {
//     title: "EXPRESS JS",
//     description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     imageUrl: images.expressjs,
//   },
//   {
//     title: "REACT JS",
//     description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     imageUrl: images.react,
//   },
//   {
//     title: "NODE JS",
//     description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     imageUrl: images.node,
//   },
//   {
//     title: "FIGMA",
//     description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     imageUrl: images.figma,
//   },
//   {
//     title: "GITHUB",
//     description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     imageUrl: images.github,
//   },
// ];

const About = () => {
  return (
    <>
      <div className="section-1">
        <div className="main">
          <h2 className="head-text">
            ABOUT <span>ME</span>
          </h2>
          <div className="container text-center">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="pray">
                  <img src={images.rohan} alt="Pray" />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="panel text-left">
                  <h1 className="head-text" style={{ textAlign: "start" }}>
                    ROHAN KHANAL
                  </h1>
                  <p className="pt-4 p-text">
                    Welcome to my portfolio! I'm Rohan Khanal, a passionate MERN
                    stack developer currently pursuing my Bachelor's in Computer
                    Science and Information Technology (BSC.CSIT) at Central
                    Campus of Technology, Dharan - 14, Jhapa, Nepal.
                  </p>
                  <p>
                    From a young age, I've been fascinated by the power of
                    technology to solve real-world problems, and this passion
                    led me to dive into the world of web development. Over the
                    years, I've honed my skills in the MERN (MongoDB,
                    Express.js, React.js, Node.js) stack, leveraging its
                    capabilities to create dynamic and responsive web
                    applications. Throughout my academic journey, I've embraced
                    every opportunity to expand my knowledge and skills in
                    software development. Whether it's working on personal
                    projects or collaborating with peers on challenging
                    assignments, I thrive on the process of continuous learning
                    and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
