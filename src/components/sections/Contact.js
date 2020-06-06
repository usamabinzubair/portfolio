import React, { Component } from "react";
import "../styles/contact.css";
import MyForm from "./Myform";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTumblrSquare } from "react-icons/fa";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-section" id="contact">
        {/* <img className="home__image" src={homeimg} alt="" /> */}
        <MyForm className="contact_form" />
        <div className="bottomBox">
          <a
            href="https://www.instagram.com/usama.zubair/"
            target="blank"
            className="socialMediaIcons"
          >
            <FaInstagram />
          </a>
          <a
            className="socialMediaIcons"
            href="https://www.linkedin.com/in/usamazubair"
            target="blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://oblikue.tumblr.com/"
            className="socialMediaIcons"
            target="blank"
          >
            <FaTumblrSquare />
          </a>
        </div>
      </div>
    );
  }
}
