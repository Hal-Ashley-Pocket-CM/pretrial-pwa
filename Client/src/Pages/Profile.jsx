import React, { Component } from "react";
import Nav from "../Components/Nav/Nav";

class Profile extends Component {
  state = {
    events: []
  };

  render() {
    return (
      <div id="profile">
        <Nav />
        <div className="row">
          <div className="col-sm-12">
            <h1 style={{ textAlign: "center" }}>Welcome to Your Profile</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"> Upcoming Events</h4>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Item 1</li>
                <li className="list-group-item">Item 2</li>
                <li className="list-group-item">Item 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
