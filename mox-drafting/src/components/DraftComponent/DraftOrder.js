import React from "react";
import "./Draft.css";

const DraftOrder = props => {
  return (
    <div className="draft-order">
      <h1>Draft Order</h1>
      <ul className="draft-order-list d-flex flex-column">
        <li
          className={`btn btn-lg btn-outline-danger ${
            props.turn === 1 ? "your-turn" : null
          }`}
        >
          Team 1
        </li>
        <li
          className={`btn btn-lg btn-outline-danger ${
            props.turn === 2 ? "your-turn" : null
          }`}
        >
          Team 2
        </li>
        <li
          className={`btn btn-lg btn-outline-danger ${
            props.turn === 3 ? "your-turn" : null
          }`}
        >
          Team 3
        </li>
        <li
          className={`btn btn-lg btn-outline-danger ${
            props.turn === 4 ? "your-turn" : null
          }`}
        >
          Team 4
        </li>
        <li
          className={`btn btn-lg btn-outline-danger ${
            props.turn === 5 ? "your-turn" : null
          }`}
        >
          Team 5
        </li>
        <li
          className={`btn btn-lg btn-outline-danger ${
            props.turn === 6 ? "your-turn" : null
          }`}
        >
          Team 6
        </li>
        <li
          className={`btn btn-lg btn-outline-danger ${
            props.turn === 7 ? "your-turn" : null
          }`}
        >
          Team 7
        </li>
        <li
          className={`btn btn-lg btn-outline-danger ${
            props.turn === 8 ? "your-turn" : null
          }`}
        >
          Team 8
        </li>
        <li
          className={`btn btn-lg btn-outline-danger ${
            props.turn === 9 ? "your-turn" : null
          }`}
        >
          Team 9
        </li>
        <li
          className={`btn btn-lg btn-outline-danger ${
            props.turn === 10 ? "your-turn" : null
          }`}
        >
          Team 10
        </li>
      </ul>
    </div>
  );
};

export default DraftOrder;
