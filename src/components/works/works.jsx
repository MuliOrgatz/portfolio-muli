import React, { Component } from "react";

import { workList } from "./worklist";

import "./works.css";

export default class Works extends Component {
  state = {
    width: window.innerWidth,
    works: workList,
    active: [true, false, false, false, false],
  };

  handleResize = (e) => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  handelStyleAfterSelectItem(temp,item){
    if(item ==="android"){
      temp[1].styleBig={top:"0px"};
    }else if(item === "angular"){
      temp[0].styleBig={top:"0px"};
      temp[1].styleBig={top:"0px"};
    }else if(item === "react"){
      temp[2].styleBig={top:"0px"};
    }
  }

  handelClickOnItem = (e) => {
    const item = e.target.id;
    if (item !== "all") {
      let temp = workList.filter((work) => work.type === item);
      this.handelStyleAfterSelectItem(temp,item);
      this.setState({ works: temp });
    } else {
      this.setState({ works: workList });
    }
    
    this.setState({
      active: this.state.active.map((val, i) =>
        i === e.target.value ? true : false
      ),
    });
  };

  handelStyle(work) {
    const { width } = this.state;
    if (width > 1024) {
      return work.styleBig;
    } else if (width === 1024) {
      return work.styleMidP;
    } else if (width === 768) {
      return work.styleMid;
    }
    return null;
  }

  render() {
    const { works, active } = this.state;
    return (
      <section id="works" className="section-work">
        <div className="container">
          <div className="section-title">
            <h2>My Works</h2>
            <p>Check out my latest projects.</p>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="works-flters" onClick={this.handelClickOnItem}>
                <li
                  className={active[0] ? "filter-active" : null}
                  id="all"
                  value="0"
                >
                  All
                </li>
                <li
                  className={active[1] ? "filter-active" : null}
                  id="react"
                  value="1"
                >
                  React
                </li>
                <li
                  className={active[2] ? "filter-active" : null}
                  id="angular"
                  value="2"
                >
                  Angular
                </li>
                <li
                  className={active[3] ? "filter-active" : null}
                  id="windows"
                  value="3"
                >
                  Windows App
                </li>
                <li
                  className={active[4] ? "filter-active" : null}
                  id="android"
                  value="4"
                >
                  Android App
                </li>
              </ul>
            </div>
          </div>
          <div className="row works-container">
            {works.map((work, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 works-item"
                  key={index}
                  style={this.handelStyle(work)}
                >
                  <div className="work-wrap">
                    <img src={work.imageUrl} className="img-fluid" alt="" />
                    <div className="work-info">
                      <h4>{work.title}</h4>
                      <p>{work.subtitle}</p>
                      <div className="work-links">
                        <a href="assets/img/ramez final.jpg" title="More info">
                          <i class="fas fa-info-circle"></i>
                        </a>
                        {work.haveWebsite ? (
                          <a
                            title="Website"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={work.webUrl}
                          >
                            <i className="fas fa-link"></i>
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
