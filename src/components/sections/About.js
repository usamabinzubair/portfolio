import React, { Component } from "react";
import Flip from "react-reveal/Flip";
// import Fade from "react-reveal/Fade";
import "../styles/about.css";
import profile from "../images/profile.jpg";
import { FaPaintBrush } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { IoMdGlasses } from "react-icons/io";

class About extends Component {
  render() {
    return (
      <div className="about-section" id="about">
        <div className="circlediv">
          <Flip top>
            <div className="test">
              <div className="creative">
                <FaPaintBrush className="paintbrush" />
              </div>
              <h2 className="headings">Creative</h2>
              <p className="subheadings">
                I like to style things which are fun to see.
              </p>
            </div>
          </Flip>
          <Flip top>
            <div className="test">
              <div className="dynamic">
                <IoMdGlasses />
              </div>
              <h2 className="headings">Dynamic</h2>

              <p className="subheadings">
                Why have everything static I like making things move.
              </p>
            </div>
          </Flip>
          <Flip top>
            <div className="test">
              <div className="adaptive">
                <FaLaptopCode />
              </div>
              <h2 className="headings">Adaptive</h2>
              <p className="subheadings">
                There are alot of technologies out there, throw it at me I ll
                learn it!
              </p>
            </div>
          </Flip>
          <Flip left>
            <div className="test">
              <div className="time">
                <MdTimer />
              </div>
              <h2 className="headings">Punctual</h2>
              <p className="subheadings">
                Deadlines are Important, I stick to mine.
              </p>
            </div>
          </Flip>
        </div>

        {/* ..........mob --- circle ---- div.................. */}
        <h1 className="mobile_heading">About Me</h1>
        <div className="mob_circle_div_wrapper">
          <div className="mob_circlediv1">
            <Flip top>
              <div className="test">
                <div className="creative">
                  <FaPaintBrush className="paintbrush" />
                </div>
                <h2 className="headings">Creative</h2>
                <p className="subheadings">
                  I like to style things which are fun to see.
                </p>
              </div>
            </Flip>
            <Flip top>
              <div className="test">
                <div className="dynamic">
                  <IoMdGlasses />
                </div>
                <h2 className="headings">Dynamic</h2>

                <p className="subheadings">
                  Why have everything static I like making things move.
                </p>
              </div>
            </Flip>
          </div>
          <div className="mob_circlediv2">
            <Flip top>
              <div className="test">
                <div className="adaptive">
                  <FaLaptopCode />
                </div>
                <h2 className="headings">Adaptive</h2>
                <p className="subheadings">
                  There are alot of technologies out there, throw it at me I ll
                  learn it!
                </p>
              </div>
            </Flip>
            <Flip left>
              <div className="test">
                <div className="time">
                  <MdTimer />
                </div>
                <h2 className="headings">Punctual</h2>
                <p className="subheadings">
                  Deadlines are Important, I stick to mine.
                </p>
              </div>
            </Flip>
          </div>
        </div>

        <div className="skills__profile">
          <div>
            <div className="profile__main">
              <div className="layer"></div>
              <Flip top>
                <img className="profileimg" src={profile} alt="" />
              </Flip>
              <div className="profile__info">
                A Young and ambious software developer with the willingess to
                learn new skills and develop further into my career ahead. A
                Young and ambious software developer with the willingess to
                learn new skills and develop further into my career ahead.
              </div>
            </div>
          </div>
          <div className="skills_wrapper">
            <div className="skills">
              <li>
                <h3>HTML</h3>
                <span className="bar">
                  <span className="html"></span>
                </span>
              </li>
              <li>
                <h3>CSS</h3>
                <span className="bar">
                  <span className="css"></span>
                </span>
              </li>
              <li>
                <h3>JAVASCRIPT</h3>
                <span className="bar">
                  <span className="javascript"></span>
                </span>
              </li>
              <li>
                <h3>REACT</h3>
                <span className="bar">
                  <span className="react"></span>
                </span>
              </li>
              <li>
                <h3>JQUERY</h3>
                <span className="bar">
                  <span className="jquery"></span>
                </span>
              </li>
              <li>
                <h3>NODE</h3>
                <span className="bar">
                  <span className="node"></span>
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
