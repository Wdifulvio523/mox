import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import Rooms from "../Rooms/Rooms";
import ComingSoon from "../ComingSoon/ComingSoon";

import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <section className="container-fluid">
          <div className="row">
            <div className="col">
              <Jumbotron />
            </div>
            <div className="col">
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
