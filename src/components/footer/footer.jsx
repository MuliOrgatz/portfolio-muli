import React, { Component } from "react";

import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer py-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              Copyright © Muli Orgatz 2020
            </div>
            <div className="col-lg-4 social">
              <a
                className=""
                href={"tel:" + this.props.telephonNumber}
              >
                <i className="fa fa-phone"></i>
              </a>
              <a
                className=""
                href="https://www.facebook.com/%D7%A8%D7%9E%D7%96-%D7%A9%D7%99%D7%95%D7%95%D7%A7-%D7%95%D7%A1%D7%97%D7%A8-1557544711204382"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
