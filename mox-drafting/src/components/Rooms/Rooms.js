import React from "react";
// import "../App.css";
import Room from "../Room/Room";
import "./Rooms.css";

class Rooms extends React.Component {
  render() {
    return (
      <div className="rooms">
        <h3>Start Drafting</h3>
        <Room numOfTeams="10" />
        <Room numOfTeams="12" />
        <Room numOfTeams="14" />
      </div>
    );
  }
}

export default Rooms;
