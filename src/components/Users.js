import React, { Component } from "react";
import UserItem from "./UserItem";
class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: "1",
          login: "ip11",
          avatar_url: "https://avatars0.githubusercontent.com/u/39377668?v=4",
          html_url: "https://github.com/ip11",
        },
        {
          id: "2",
          login: "ry",
          avatar_url: "https://avatars1.githubusercontent.com/u/80?v=4",
          html_url: "https://github.com/ry",
        },
        {
          id: "3",
          login: "dan",
          avatar_url: "https://avatars1.githubusercontent.com/u/219?v=4",
          html_url: "https://github.com/dan",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
