import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import pic from "../../assets/img/41.jpg";

import "./about.css";

export default class about extends Component {
  render() {
    return (
      <section id="about" className="about-section">
        <div className="container">
          <Fade top duration={1500}>
            <div className="section-title">
              <h2>About</h2>
            </div>
          </Fade>
          <Fade bottom cascade duration={1500}>
            <div className="row">
              <div className="col-lg-4">
                <img src={pic} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0">
                <h3>Full Stack Developer & Web Developer.</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> 22 June 1993
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Website:</strong> {window.location.href}
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Phone:</strong> +972 0538778191
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>City:</strong> Rishon Lezion, Israel
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Age:</strong> 27
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Degree:</strong> Bachelor of Science
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Email:</strong> muli652@gmail.com
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>{" "}
                        <strong>Freelance:</strong> Available
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Full stack developer who loves to transform ideas into reality
                  using code. I am passionate about using Javascript and
                  Animation Libraries to create awesome user experiences.
                  Developing web applications using the latest front-end and
                  back-end technologies. Motivated designer and developer with
                  experience creating custom websites with ReactJs, JavaScript,
                  HTML5, and CSS3. Strong collaboration skills and proven
                  history of application development.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}
