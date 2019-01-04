import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import Rooms from "../Rooms/Rooms";
import ComingSoon from "../ComingSoon/ComingSoon";

import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <header>
          <nav>
            <a href="#">Community</a>
            <a href="#">Research</a>
            <a href="#">Login</a>
            <a href="#">Signup</a>
          </nav>
        </header>
        <section className="container-fluid">
          <div className="row">
            <div className="col-7">
              <Jumbotron />
            </div>
            <div className="col-5">
              <Rooms />
              <ComingSoon />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
