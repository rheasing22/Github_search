import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar title="Github Search Engine" icon="fab fa-github" />
      </div>
    );
  }
}

export default App;
