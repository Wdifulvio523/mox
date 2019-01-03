import React from "react";
import "../../App.css";
import "./Jumbotron.css";
import logo from "../moxdraft-logo-1.png";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>MoxDraft Live NFL Drafting</h1>
        <img src={logo} />
        {/* <img src=""> */}
        <h3>Live NFL Draft</h3>
        <section class="taglines">
          <p>
            <h5>Draft against your friends, LIVE</h5>
          </p>
          <p>
            <h5>
              User rankings help you draft with the people you want to draft
              with
            </h5>
          </p>
          <p>
            <h5>
              <strong>Start now! Select your team</strong>
            </h5>
          </p>
        </section>
      </div>
    );
  }
}

export default Jumbotron;
