import React from "react";
import "./LobbyRow.css";

import Slot from "../Slot/Slot";

const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class LobbyRow extends React.Component {
  render() {
    return (
      <div className="lobby-row d-flex align-items-center">
        <span className="grey w-25">Half-PPR</span>
        <span className="grey w-25">12</span>
        <span className="open-slots w-25">
          {slots.map(num => {
            if (num <= slots.length) {
              return <Slot slotNumber={num} />;
            }
          })}
        </span>
        <span className="starts-in w-25">10:00</span>
      </div>
    );
  }
}

export default LobbyRow;
