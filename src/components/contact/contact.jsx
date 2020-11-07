import React, { Component } from "react";

import { checkValidtion, sendEmail } from "./contactFunctions";

import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import "./contact.css";

export default class Contact extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    errors: {},
    mesSent: false,
    loading: false,
  };

  handleChange = (event) => {
    const { formData } = this.state;
    const { name, value } = event.target;
    this.setState({
      formData: {
        ...formData,
        [name]: value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const errors = checkValidtion(this.state.formData);
    if (!errors) {
      this.setState({ loading: true });
      const messageToSend = {
        message: this.state.formData.message,
        from_name: this.state.formData.name,
        subject: this.state.formData.subject,
        email: this.state.formData.email,
      };
      sendEmail(event, messageToSend).then(
        (res) => {
          this.setState({ loading: false });
          this.setState({ mesSent: true });
        },
        (error) => {
          console.log(error);
          this.setState({ errors: { sendFaild: "faild" } });
        }
      );
    } else {
      this.setState({ errors: errors });
    }
  };

  render() {
    const { formData, mesSent, loading, errors } = this.state;
    return (
      <section id="contact" className="contact-section">
        <div className="container">
        <Zoom cascade>
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Whether you want to get in touch, talk about a project
              collaboration, or just say hi, I'd love to hear from you.<br/> Simply
              fill the from and send me an email.
            </p>
          </div>
          <div className="row mt-1">
            <div className="col-lg-3">
              <div className="info">
                <div className="address">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Location:</h4>
                  <p>Rishon Lezion, Isreal</p>
                </div>

                <div className="email">
                  <i className="fas fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>Muli652@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="fas fa-phone-alt"></i>
                  <h4>Call:</h4>
                  <p>+972 0538778191</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9 mt-5 mt-lg-0">
              <form className="contact-form">
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      style={
                        errors.name ? { border: "2px solid #dc3545" } : null
                      }
                      onChange={this.handleChange}
                      value={formData.name}
                    />
                    <Bounce collapse spy={!errors.name}>
                      <div className="validate">{errors.name}</div>
                    </Bounce>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      style={
                        errors.email ? { border: "2px solid #dc3545" } : null
                      }
                      placeholder="Your Email"
                      onChange={this.handleChange}
                      value={formData.email}
                    />
                    <Bounce collapse spy={!errors.email}>
                      <div className="validate">{errors.email}</div>
                    </Bounce>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    style={
                      errors.subject ? { border: "2px solid #dc3545" } : null
                    }
                    placeholder="Subject"
                    onChange={this.handleChange}
                    value={formData.subject}
                  />
                  <Bounce collapse spy={!errors.subject}>
                    <div className="validate">{errors.subject}</div>
                  </Bounce>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control message"
                    name="message"
                    placeholder="Message"
                    onChange={this.handleChange}
                    value={formData.message}
                    style={
                      errors.message ? { border: "2px solid #dc3545" } : null
                    }
                  ></textarea>
                  <Bounce collapse spy={!errors.message}>
                    <div className="validate">{errors.message}</div>
                  </Bounce>
                </div>
                <div className="mb-3">
                  <Bounce>
                    <div
                      className={"error-message"}
                      style={errors.sendFaild ? { display: "flex" } : null}
                    >
                      Faild to send message, please send it to my email.
                    </div>
                  </Bounce>
                  <Fade top>
                    <div
                      className="sent-message"
                      style={mesSent ? { display: "flex" } : null}
                    >
                      Your message has been sent. Thank you!
                    </div>
                  </Fade>
                </div>
                <div className="text-center">
                  <button type="submit" onClick={this.handleSubmit}>
                    {loading ? (
                      <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          </Zoom>
        </div>
      </section>
    );
  }
}
