import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import Typical from "react-typical";

import "./header.css";

export default class Header extends Component {
  render() {
    //צריך לסדר את איך שהאיקונים נראים רספונסיבי
    return (
      <header
        id="top"
        className="header-main d-flex flex-column justify-content-center"
      >
        <Zoom delay={100}>
          <div className="container">
            <h1 className="header-title">Muli Orgatz</h1>
            <p className="header-subtitle">
              I'm a{" "}
              <Typical
                steps={[
                  "Full Stack Developer",
                  2500,
                  "Front End Developer",
                  2500,
                  "Freelancer",
                  2500,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </p>
            <div className="social-links">
              <a herf="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a herf="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a herf="#">
                <i className="fab fa-github"></i>
              </a>
              <a herf="#">
                <i className="fas fa-at"></i>
              </a>
              <a herf="#">
                <i className="fas fa-phone-alt"></i>
              </a>
            </div>
          </div>
        </Zoom>
      </header>
    );
  }
}
