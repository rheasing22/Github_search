import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card">
        <img
          src={avatar_url}
          class="card-image"
          alt="profile image"
          style={{ width: "120px" }}
        />
        <h3>{login}</h3>
        <a href={html_url} className="btn">
          <button>View Profile</button>
        </a>
      </div>
    );
  }
}
export default UserItem;
