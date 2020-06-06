import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import Work from "./components/sections/Work";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <Navbar />
          <Home />
          <Work />
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
