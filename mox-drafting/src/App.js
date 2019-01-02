import React, {Component} from "react";
import "./App.css";
import Draft from "./components/Draft";
import LandingPage from "./components/LandingPage/LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Draft />
      </div>
    );
  }
}

export default App;
