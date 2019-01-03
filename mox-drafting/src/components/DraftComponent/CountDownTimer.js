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
  }

  //Starts the timer
  startTimer() {
    this.setState({
      draftIsOn: true
    });
    this.timer = setInterval(() => {
      if (this.state.draftTime === 0) {
        this.setState({ draftIsOn: false, pickIsOn: true });
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
      // if (this.props.turn !== ) {
      //   this.setState({pickTime: 59});
      // }
    }, 1000);
  }

  autoDraftOnClick() {
    if (this.state.draftTime === 0) {
      console.log('autodraftonclick2')

      this.props.autoDraft();
    }
  }
componentDidMount() {
    this.autoDraftOnClick();
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
          <button
            onClick={() => {
              this.startTimer();
            }}
          >
            start
          </button>
        ) : null}
        <Logger draftedPlayer={this.props.draftedPlayer} />
      </div>
    );
  }
}
export default CountDownTimer;
