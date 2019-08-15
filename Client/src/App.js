import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import CheckIn from "./Pages/CheckIn";

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
