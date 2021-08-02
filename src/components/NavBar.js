import React, { Component } from "react";
import PropTypes from "prop-types";

class NavBar extends Component {
  static defaultProps = {
    title: "GitHub App",
    icon: "fab fa-github",
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  render() {
    console.log(this.props);
    return (
      <nav className="navContainer">
        <div>
          {" "}
          <a href="/" className="nav_tagline">
            <i className={this.props.icon}></i>
            {this.props.title}
          </a>
        </div>
        <div className="nav_links">
          <a href="/">
            <i className="fas fa-home"></i>
            <span className="link_text">Home</span>
          </a>
          <a href="/">
            <i className="fas fa-envelope"></i>
            <span className="link_text">Contact Us</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
