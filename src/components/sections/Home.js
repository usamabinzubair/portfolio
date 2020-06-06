import React, { Component } from "react";
import "../styles/home.css";
import homeimg from "../images/homeimg.jpg";

class Home extends Component {
  render() {
    return (
      <div className="home-section" id="home">
        <div className="header">Hello, I am </div>
        <div className="header2">Usama Zubair</div>
        <img className="home__image" src={homeimg} alt="" />
      </div>
    );
  }
}

export default Home;
