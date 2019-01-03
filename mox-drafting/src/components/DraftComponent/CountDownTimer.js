import React from "react";
import "./Draft.css";
import Logger from "./Logger";

class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draftTime: 9,
      draftIsOn: false,
      pickTime: 59,
      pickIsOn: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
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
        this.props.autoDraft();
        this.setState({
          pickTime: this.state.pickTime - 1
        });
      }
    }, 1000);
  }

  // startPickTimer() {
  //   // this.setState({
  //   //   pickTime: this.state.pickTime
  //   // });

  //   if (this.state.pickIsOn === true) {
  //     this.timer = setInterval(() => {
  //       if (this.state.pickTime === 0) {
  //         this.setState({pickTime: 59});
  //       } else {
  //         this.setState({
  //           pickTime: this.state.pickTime - 1
  //         });
  //       }
  //     }, 1000);
  //   }
  // }

  resetTimer() {
    this.setState({draftTime: 0});
  }

  render() {
    return (
      <div className="timer">
        {this.state.pickIsOn === true ? (
          <h3> Time Remaining: {this.state.pickTime}</h3>
        ) : (
          <h3>Draft Begins: {this.state.draftTime}</h3>
        )}
        {this.state.draftTime === 9 ? (
          <button onClick={this.startTimer}>start</button>
        ) : null}
        <Logger draftedPlayer={this.props.draftedPlayer} />
      </div>
    );
  }
}
export default CountDownTimer;
