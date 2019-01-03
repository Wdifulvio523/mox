import React from "react";
import "./LobbyRow.css";

import Slot from "../Slot/Slot";

const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class LobbyRow extends React.Component {
  render() {
    return (
      // <tr className="lobby-row d-flex align-items-center">
      <tr className="w-100">
        <td className=" ">Half-PPR</td>
        <td className=" ">12</td>
        <td className="open-slots ">
          {slots.map(num => {
            if (num <= slots.length) {
              return <Slot slotNumber={num} />;
            }
          })}
        </td>
        <td className="starts-in">10:00</td>
      </tr>
    );
  }
}

export default LobbyRow;
