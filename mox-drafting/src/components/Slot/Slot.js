import React from "react";
import "./Slot.css";
import {Link} from "react-router-dom";

class Slot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  assignSlotHandler = event => {};

  render() {
    return (
      <Link to="/draft" className="mb-3 slot">
        <span>{this.props.slotNumber}</span>
      </Link>
    );
  }
}

export default Slot;
