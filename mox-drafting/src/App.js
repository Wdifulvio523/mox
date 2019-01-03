import React, {Component} from "react";
import "./App.css";
import Draft from "./components/DraftComponent/Draft";
import LandingPage from "./components/LandingPage/LandingPage";
import {Route, Switch} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/draft' component={Draft}/>
      </Switch>
  
      </div>
    );
  }
}

export default App;
