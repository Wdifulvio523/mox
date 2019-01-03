import React from "react";
import Countdown from "react-countdown-now";

const CountDownTimer = (props) => {
  const timeLeft = 60;

const DraftBegins = () => {
    return  <Countdown 
    onStart= {() => {

    }}
    date={Date.now() + 59000}
    renderer={({ minutes, seconds, completed}) => {
        if (completed ) {
            return <DraftBegins />;
          } else {
          return  <span>{minutes}:{seconds}</span>;
      }}}
    />
}

  return (
    <Countdown
      date={Date.now() + 30000}
      renderer={({ minutes, seconds, completed}) => {
        if (completed) {
            return <DraftBegins />;
          } else {
          return  <span>{minutes}:{seconds}</span>;
      }}}
    />
  );
};

export default CountDownTimer;
