import React, { Component } from "react";
import "../styles/work.css";
import apocalypse from "../images/apocalypse.jpg";
import dicegame from "../images/dicegme.jpg";
import keycode from "../images/keycode.jpg";
import weatherapp from "../images/weatherapp.jpg";
import sajidas from "../images/sajidas.jpg";
import homeimg from "../images/homeimg.jpg";

class Work extends Component {
  render() {
    return (
      <div className="work-section" id="work">
        <div className="all__work">
          <div className="three__boxes">
            <div className="card">
              <div className="front">
                <img src={dicegame} alt="" width="333px" height="200px" />
              </div>
              <div className="back">
                <div className="details">
                  <h2>DICE GAME</h2>
                  <p>Dicegame made using Dom.js, HTML and CSS</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src={apocalypse} alt="" width="333px" height="200px" />
              </div>
              <div className="back">
                <div className="details">
                  <h2>Apocalypse</h2>
                  <p>
                    A Social Media App created in times of COVID-19, using Mern
                    Stack.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src={keycode} alt="" width="333px" height="200px" />
              </div>
              <div className="back">
                <div className="details">
                  <h2>KeyCode</h2>
                  <p>Javascript Keycode made using Dom.js</p>
                </div>
              </div>
            </div>
          </div>
          <div className="three__boxes">
            <div className="card">
              <div className="front">
                <img src={weatherapp} alt="" width="333px" height="200px" />
              </div>
              <div className="back">
                <div className="details">
                  <h2>Weather App</h2>
                  <p>A weather App created using Node and express.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="front">
                <img src={sajidas} alt="" width="333px" height="200px" />
              </div>
              <a
                className="back"
                href="https://www.sajidas.co.uk"
                target="blank"
              >
                <div className="details">
                  <h2>Sajdia's Hair and Beauty</h2>
                  <p>Front-End website created using React.js</p>
                </div>
              </a>
            </div>
            <div className="card">
              <div className="front">
                <img src={homeimg} alt="" width="333px" height="200px" />
              </div>
              <div className="back">
                <div className="details">
                  <h2>DICE GAME</h2>
                  <p>Dicegame made using Dom.js, HTML and CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
