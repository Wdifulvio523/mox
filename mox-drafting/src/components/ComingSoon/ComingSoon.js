import React from "react";
// import "../App.css";
import "./ComingSoon.css";

class ComingSoon extends React.Component {
  render() {
    return (
      <div className="coming-soon mt-5">
        <h3 className="text-center">Coming Soon</h3>
        <div className=" d-flex flex-column justify-content-around">
          <div className="w-80 card relative">
            <div className="overlay">
              {/* <div className="text">Coming Soon</div> */}
            </div>
            <h5 className="card-header text-center">Custom Rounds</h5>
            <p className="soon-text ">
              Don't want to commit to a full mock draft? No problem! Create a
              mock draft that lasts 1, 2, or 3 rounds so you can be as prepared
              as you want!
            </p>
          </div>
          <div className="w-80 card relative">
            <div className="overlay">
              {/* <div className="text">Coming Soon</div> */}
            </div>
            <h5 className="card-header text-center">Accountability</h5>

            <p className="soon-text">
              Is someone always picking a kicker in round 1? Never draft with
              them again! Our reputation rankings will allow you to rate other
              users so that only the most dedicated drafters are paired
              together!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
