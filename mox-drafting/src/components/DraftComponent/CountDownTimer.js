import React from "react";
import "./Draft.css";

class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 9,
      isOn: true
    };
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  //Starts the timer
  startTimer() {
    this.setState({
      time: this.state.time,
      isOn: true
    });
    if (this.state.isOn === true) {
      this.timer = setInterval(() => {
        if (this.state.time === 0) {
          this.props.autoDraft();
          this.setState({time: 59});
        } else {
          this.setState({
            time: this.state.time - 1
          });
        }
      }, 1000);
    }
  }

  resetTimer() {
    this.setState({time: 0});
  }
  render() {
    let start =
      this.state.time === 9 ? (
        <button onClick={this.startTimer}>start</button>
      ) : null;
    let reset =
      this.state.time !== 0 && !this.state.isOn ? (
        <button onClick={this.resetTimer}>reset</button>
      ) : null;
    let resume =
      this.state.time !== 0 && !this.state.isOn ? (
        <button onClick={this.startTimer}>resume</button>
      ) : null;
    return (
      <div className="timer">
        <h3>timer: {this.state.time}</h3>
        {start}
        {resume}

        {reset}
      </div>
    );
  }
}
export default CountDownTimer;
