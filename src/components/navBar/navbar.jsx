import React, { Component } from "react";

import { menuItems } from "./menuItem";

import { Link} from "react-scroll";

import "./navbar.css";

class Navbar extends Component {
  state = {
    active: false,
    scrolled: false,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { scrolled } = this.state;
    return (
      <nav
        className="navbar-main"
        style={scrolled ? { background: "#fff"} : {borderBottom:"0px #ddd"}}
      >
        <h2 className="navbar-logo ">Muli Orgatz</h2>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  activeClass="active"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={700}
                  className={item.cName}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
