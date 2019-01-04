import React from "react";
import "./Rooms.css";
import {Link} from "react-router-dom";
import Room from "../Room/Room";

class Rooms extends React.Component {
  render() {
    return (
      <div className="rooms">
        <h3>Start Drafting</h3>
        <Room numOfTeams="10" />
        <Room numOfTeams="12" />
        <Room numOfTeams="14" />
        <Link to="/lobby">
          <button className="btn btn-moxred">Draft Lobby</button>
        </Link>
      </div>
    );
  }
}

export default Rooms;
