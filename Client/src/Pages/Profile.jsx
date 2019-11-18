import React, { Component } from "react";
import Nav from "../Components/Nav/Nav";

class Profile extends Component {
  state = {};

  render() {
    return (
      <div id="profile">
        <Nav />
        <h1 style={{ textAlign: "center" }}>Welcome to Your Profile</h1>
      </div>
    );
  }
}
export default Profile;
