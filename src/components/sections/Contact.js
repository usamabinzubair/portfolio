import React, { Component } from "react";
import "../styles/contact.css";
import MyForm from "./Myform";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTumblrSquare } from "react-icons/fa";
import HeadShake from "react-reveal/HeadShake";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="mobile_heading">Contact</h1>
        <div className="contact-section" id="contact">
          {/* <img className="home__image" src={homeimg} alt="" /> */}
          <MyForm className="contact_form" />
          <div className="bottombox">
            <HeadShake right>
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
            </HeadShake>
          </div>
        </div>
      </div>
    );
  }
}
