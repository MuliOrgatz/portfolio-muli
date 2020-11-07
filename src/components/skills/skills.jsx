import React, { Component } from "react";
import ProgressBar from "../progressbar/progressbar";

import Fade from "react-reveal/Fade";

import "./skills.css";

export default class Skills extends Component {
  state={
    reveal: false
  }

  handelReveal = ()=>{
    this.setState({reveal:true})
  }

  render() {
    const {reveal} = this.state;
    return (
      <section id="skills" className="skills-section">
        <Fade bottom duration={1500} onReveal={ this.handelReveal }>
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
            </div>
            <div className="row skills-content">
              <div className="col-lg-6">
                <ProgressBar width={"100%"} title={"HTML5"} reveal={reveal}/>
                <ProgressBar width={"80%"} title={"CSS3"} reveal={reveal}/>
                <ProgressBar width={"85%"} title={"JavaScript"} reveal={reveal}/>
                <ProgressBar width={"70%"} title={"Node.JS"} reveal={reveal}/>
                <ProgressBar width={"75%"} title={"Design Patterns"} reveal={reveal}/>
              </div>
              <div className="col-lg-6">
                <ProgressBar width={"95%"} title={"C#"} reveal={reveal}/>
                <ProgressBar width={"90%"} title={"ReactJS"} reveal={reveal}/>
                <ProgressBar width={"60%"} title={"Angular"} reveal={reveal}/>
                <ProgressBar width={"90%"} title={"SQL"} reveal={reveal}/>
                <ProgressBar width={"50%"} title={"ASP.NET"} reveal={reveal}/>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}
