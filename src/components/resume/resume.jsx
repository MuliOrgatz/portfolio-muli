import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import "./resume.css";

export default class Resume extends Component {
  render() {
    return (
      <section id="resume" className="resume-section">
        <div className="container">
        <Fade bottom cascade duration={1500}>
          <div className="section-title">
            <h2>Resume</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <p className="cir"></p>
                <h4>Muli Orgatz</h4>
                <p>
                  <em>
                    I have recently completed a bachelor's in Computer Science.
                    I have highly independent learning skills, am able to lead
                    processes, have a wide view of systems and excellent
                    interpersonal communication skills. I am a fast learner as
                    well as highly motivated.
                  </em>
                </p>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <p className="cir"></p>
                <h4>B.Sc. Computer Science</h4>
                <h5>2017 - 2020</h5>
                <p>
                  <em>HIT college, Holon, IL</em>
                </p>
                <p>GPA 86</p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <p className="cir"></p>
                <h4>Freelancer</h4>
                <h5>2019 - Present</h5>
                <ul>
                  <li>
                    Proficient in React.js, HTML, CSS, JAVASCRIPT, Bootstrap.
                  </li>
                  <li>
                    Met and corresponded with clients to determine client needs
                    for company sites.
                  </li>
                  <li>
                    Web developer able to build a web appliction from start to
                    finish.
                  </li>
                  <li>Responsive landing pages and E-commerce web appliction.</li>
                  <li>Maintaind applications and update them.</li>
                  <li>
                    Able to identify problems and bugs in the code and quickly
                    resolved the problem.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </Fade>
          <Fade bottom delay={800} duration={1500}>
          <button type="submit">Get my full resume</button>
          </Fade>
        </div>
      </section>
    );
  }
}
