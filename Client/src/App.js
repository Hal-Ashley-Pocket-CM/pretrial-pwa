import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import CheckIn from "./Pages/CheckIn";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Logout from "./Pages/LogOut";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/CheckIn" component={CheckIn} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Logout" component={Logout} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
