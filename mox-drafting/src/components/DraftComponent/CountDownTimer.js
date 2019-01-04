import React from "react";
import "./Draft.css";
import Logger from "./Logger";

class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draftTime: 3,
      draftIsOn: false,
      pickIsOn: false,
      pickTime: 10
    };
    this.startTimer = this.startTimer.bind(this);
  }

  //Starts the timer
  startTimer() {
    this.setState({
      draftIsOn: true
    });
    this.timer = setInterval(() => {
      if (this.state.draftTime === 0) {
        this.setState({draftIsOn: false, pickIsOn: true});
      } else {
        this.setState({
          draftTime: this.state.draftTime - 1
        });
      }
      if (this.state.pickIsOn === true) {
        this.setState({
          pickTime: this.state.pickTime - 1
        });
      }
      if (this.state.pickTime === 0) {
        this.props.autoPick();
        this.setState({
          pickTime: this.state.pickTime + 10,
          turn: this.props.turn + 1
        });
      }
    }, 1000);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.turn !== state.turn) {
      return {
        turn: props.turn
      };
    }
    // return null if state/props haven't changed.
    return null;
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.turn !== this.props.turn) {
      console.log("this.props", this.props.turn);
      console.log("prevProps", prevProps.turn);
      console.log("prevState", prevState.turn);
      console.log("round", this.props.round);
      this.setState({pickTime: 15});
    }
  };

  autoDraftOnClick() {
    setInterval(() => {
      if (this.state.draftTime === 0) {
        this.props.autoDraft();
      }
    }, 1500);
  }

  render() {
    return (
      <div className="timer d-flex flex-column text-center justify-content-center ">
        {this.state.pickIsOn === true ? (
          <div>
            <div className="on-the-clock">
              <span>
                ON THE CLOCK: <strong>YOU</strong>
              </span>
              <span>
                RD: <strong>{this.props.round}</strong>
              </span>
              <span>
                PICK: <strong>{this.props.overallPick}</strong>
              </span>
            </div>
            <h3 className="time-remaining">
              {/* Time Remaining: <br /> */}
              {this.state.pickTime < 10
                ? `0:0${this.state.pickTime}`
                : `0:${this.state.pickTime}`}
            </h3>
          </div>
        ) : (
          <h3>
            Draft Begins: <br />
            {this.state.draftTime}
          </h3>
        )}
        {this.state.draftTime === 3 ? (
          <button
            className="w-30 mx-auto btn btn-success start-btn"
            onClick={() => {
              this.startTimer();
              this.autoDraftOnClick();
            }}
          >
            Start Draft
          </button>
        ) : null}

        <Logger draftedPlayer={this.props.draftedPlayer} />
      </div>
    );
  }
}
export default CountDownTimer;
