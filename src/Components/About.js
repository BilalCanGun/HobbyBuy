// About.js
import React from "react";
import "./style.css";

const About = ({ aboutheader, desc, img }) => {
  return (
    <div className="about-container">
      <h1 className="about-header">{aboutheader}</h1>

      <div className="about-desc-img">
        <p className="about-desc">{desc}</p>

        <div className="image-container">
          <img
            className="about-img"
            src={process.env.PUBLIC_URL + img}
            alt={aboutheader}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
