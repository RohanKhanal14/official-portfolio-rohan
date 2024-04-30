import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <>
      <div className="app__social">
        <a
          href="https://www.facebook.com/profile.php?id=100076451437022&mibextid=ZbWKwL"
          target="_blank"
        >
          <div>
            <FaFacebookF />
          </div>
        </a>
        <a
          href="https://www.instagram.com/rohan.khanal119?igsh=Y2QxNno1MTI5d3E5"
          target="_blank"
        >
          <div>
            <BsInstagram />
          </div>
        </a>
        <a href="https://github.com/RohanKhanal14" target="_blank">
          <div>
            <FaGithub />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/rohan-khanal-ba6823274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <div>
            <FaLinkedin />
          </div>
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
