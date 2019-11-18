import React, { Component } from "react";
import Nav from "../Components/Nav/Nav";

class Logout extends Component {
  state = {};

  render() {
    return (
      <div id="Logout">
        <Nav />
        <h1 style={{ textAlign: "center" }}>Thanks for checking in!</h1>
        <h4 style={{ textAlign: "center" }}>You are officially logged out.</h4>
      </div>
    );
  }
}
export default Logout;
