import React from "react";
import Slot from "../Slot/Slot";

import "./Room.css";

let slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// const mapSlots = numOfTeams => {
//   for (let i = 1; i <= Number(numOfTeams); i++) {
//     return <Slot slotNumber={i} />;
//   }
//   slots.map(num => <Slot slotNumber={num} />);
// };

const Room = props => {
  return (
    <div className="room">
      <p>{props.numOfTeams} Teams</p>
      <div className="slots">
        {slots.map(num => {
          if (num <= Number(props.numOfTeams)) {
            console.log("props", props.numOfTeams);
            console.log("num", num);
            return <Slot slotNumber={num} />;
          }
        })}
      </div>
    </div>
  );
};

export default Room;
