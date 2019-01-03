import React from "react";
import "./Slot.css";

const Slot = props => {
  console.log(props);
  return <span className="slot">{props.slotNumber}</span>;
};

export default Slot;
