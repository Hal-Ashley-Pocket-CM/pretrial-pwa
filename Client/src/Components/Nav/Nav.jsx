import React from "react";

const Nav = props => (
  <div>
    <nav
      className="navbar navbar-dark bg-dark"
      style={{
        textShadow: "2px 2px 4px #000000",
        // boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)'//google
        boxShadow: "0 2px 6px 0 #2E8B57" //green
        // boxShadow: '0 1px 6px 0 #8A2BE2'//purple
      }}
    >
      <a className="navbar-brand" href="/">
        Check In
      </a>
      <a className="navbar-brand" href="/">
        Profile
      </a>
      <a className="navbar-brand" href="/">
        Logout
      </a>
    </nav>
  </div>
);

export default Nav;
