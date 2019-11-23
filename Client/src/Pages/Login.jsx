import React, { Component } from "react";
import LoginNav from "../Components/LoginNav/LoginNav";
import "./login.css";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted: ", this.state.email, this.state.password);

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    //post route that sends user info to db
  };

  render() {
    return (
      <div>
        <LoginNav />
        <div id="login" className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <form id="loginForm" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
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
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
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
