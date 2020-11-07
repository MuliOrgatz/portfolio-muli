import React, { Component } from "react";
import './progressbar.css'

export default class ProgressBar extends Component {
    state = {
        width: 0
      };

      componentDidMount() {
        requestAnimationFrame(() => {
          this.setState({ width: this.props.width });
        });
      }

  render() {
    return (
      <div className="progress">
        <span className="skill">
          {this.props.title} <i className="val">{this.state.width}</i>
        </span>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            style={this.props.reveal? { width: this.state.width }:null}
          ></div>
        </div>
      </div>
    );
  }
}
