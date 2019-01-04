import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Lobby.css";
import logo from "../moxdraft-logo-1.png";

import LobbyRow from "../LobbyRow/LobbyRow";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let n = Math.floor(Math.random() * (max - min)) + min;
  if (n % 2 === 0) {
    return n;
  } else {
    return getRandomInt(8, 14);
  }
};
export default class Lobby extends Component {
  constructor() {
    super();
    this.state = {
      mockDrafts: []
    };
  }

  render() {
    return (
      <div className="lobby">
        <div className="nav-bar">
          <Link exact to="/">
            <img src={logo} alt="MoxDraft home" title="Back to homepage" />
          </Link>
        </div>
        <div className="banner">
            
        </div>
        <h2 className="text-center display-2 mb-4">Join a Draft</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">
                <h4 className="text-center">Format</h4>
              </th>
              <th scope="col">
                <h4 className="text-center">Teams</h4>
              </th>
              <th scope="col">
                <h4 className="text-center">Open Slots</h4>
              </th>
              <th scope="col">
                <h4 className="text-center">Starts In</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <LobbyRow starting="5" scoring="PPR" teams="10" />
            <LobbyRow starting="5" scoring="Half-PPR" teams="10" />
            <LobbyRow starting="10" scoring="Standard" teams="10" />
            <LobbyRow starting="5" scoring="PPR" teams="12" />
            <LobbyRow starting="5" scoring="Half-PPR" teams="12" />
            <LobbyRow starting="10" scoring="Standard" teams="12" />
            <LobbyRow starting="5" scoring="PPR" teams="14" />
            <LobbyRow starting="5" scoring="Half-PPR" teams="14" />
            <LobbyRow starting="10" scoring="Standard" teams="14" />
          </tbody>
        </table>
      </div>
    );
  }
}
