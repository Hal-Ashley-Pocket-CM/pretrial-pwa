import React, { Component } from "react";
import LoginNav from "../Components/LoginNav/LoginNav";
import "./login.css";
class Profile extends Component {
  state = {};

  render() {
    return (
      <div>
        <LoginNav />
        <div id="login" className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <form id="loginForm">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <small id="emailHelp" className="form-text text-muted">
                  First time logging in? Your password is your client ID #.
                </small>
              </div>

              <button
                id="loginBtn"
                type="submit"
                className="btn-large btn-success"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
