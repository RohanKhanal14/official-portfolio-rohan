import React from "react";
import images from "../../constants/images";
import "./Contact.scss";
import SocialMedia from "../../components/SocialMedia";

const Contact = () => {
  return (
    <>
      <div className="container vh-100" style={{ padding: "5rem 0 0 0" }}>
        <div className="row h-100 border-primary">
          <div className="col-md-7 col-sm-12 m-lg-auto">
            <img src={images.contact} className="w-100" alt="image" />
          </div>
          <div className="col-md-5 col-sm-12 m-lg-auto">
            <form>
              <div className="segment">
                <h1 className="head-text">
                  {" "}
                  <span>CONTACT </span>ME
                </h1>
              </div>
              <label>
                <input type="text" placeholder="NAME" />
              </label>
              <label>
                <input type="email" placeholder="EMAIL" />
              </label>
              <label>
                <textarea type="email" placeholder="MESSAGE" />
              </label>
              <button className="red" type="button">
                <i className="icon ion-md-lock"></i> <span>SUBMIT</span>
              </button>
            </form>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
