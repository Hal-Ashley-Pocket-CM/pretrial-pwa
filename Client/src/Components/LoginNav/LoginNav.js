import React from "react";
import { Link } from "react-router-dom";

const LoginNav = props => (
  <div id="nav">
    <nav
      id="navContent"
      className="navbar navbar-dark bg-dark"
      style={{
        textShadow: "2px 2px 4px #000000",
        // boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)'//google
        // boxShadow: "0 2px 6px 0 #2E8B57" //green
        boxShadow: "10px 10px 5px grey"
        // boxShadow: '0 1px 6px 0 #8A2BE2'//purple
      }}
    >
      {/* <Link className="navbar-brand" to="/CheckIn" onClick={props.checkIn}>
        Check In
      </Link> */}

      <Link className="navbar-brand" to="/Profile">
        Profile
      </Link>

      {/* <Link className="navbar-brand" to="/Logout">
        Logout
      </Link> */}
    </nav>
  </div>
);

export default LoginNav;
