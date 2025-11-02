import React from "react";
import "./intro.css";
import Me from "../../img/Me.jpg";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is </h2>
          <h1 className="i-name">Sujit Kumar Gupta</h1>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">AI and ML enthusiast</div>
            </div>
          </div>
          <p className="i-desc">
            A tech enthusiast with hands-on experience in web application and
            full-stack development, equipped with soft skills such as
            leadership, problem-solving, and teamwork. Seeking an opportunity to
            apply technical knowledge, contribute to innovative solutions, and
            grow in the tech industry.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default Intro;
