import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Users from "./components/Users";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar title="Github Search Engine" icon="fab fa-github" />
        <Users />
      </div>
    );
  }
}

export default App;
