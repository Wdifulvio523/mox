import React, {Component} from "react";
import "./App.css";

import Draft from "./components/DraftComponent/Draft";

import LandingPage from "./components/LandingPage/LandingPage";
import Lobby from "./components/Lobby/Lobby";
import {Route, Switch} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/lobby" render={() => <Lobby />} />
          <Route exact path="/draft" render={() => <Draft />} />
        </Switch>
      </div>
    );
  }
}

export default App;
