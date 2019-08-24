import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import CheckIn from "./Pages/CheckIn";
require("dotenv").config();
console.log("APIKEY", process.env.REACT_APP_API_KEY);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={CheckIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
