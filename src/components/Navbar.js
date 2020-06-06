import React, { Component } from "react";
import { Link } from "react-scroll";
import "./styles/navbar.css";
import { FiHexagon } from "react-icons/fi";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <FiHexagon />
        </div>
        <div className="nav__content">
          <Link
            className="link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <a href className="hover__link">
              HOME
            </a>
          </Link>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            duration={500}
          >
            <a href className="hover__link">
              WORK
            </a>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <a href className="hover__link">
              ABOUT
            </a>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <a href className="hover__link">
              CONTACT
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
