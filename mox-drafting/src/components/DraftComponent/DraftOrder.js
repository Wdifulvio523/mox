import React from "react";
import './Draft.css'

const DraftOrder = props => {
  return (
    <div className="draft-order">
      <h1>Draft Order</h1>
      <ul className="draft-order-list d-flex flex-column">
        <li className="btn btn-lg btn-outline-danger your-turn">Team 1</li>
        <li className="btn btn-lg btn-outline-danger">Team 2</li>
        <li className="btn btn-lg btn-outline-danger">Team 3</li>
        <li className="btn btn-lg btn-outline-danger">Team 4</li>
        <li className="btn btn-lg btn-outline-danger">Team 5</li>
        <li className="btn btn-lg btn-outline-danger">Team 6</li>
        <li className="btn btn-lg btn-outline-danger">Team 7</li>
        <li className="btn btn-lg btn-outline-danger">Team 8</li>
        <li className="btn btn-lg btn-outline-danger">Team 9</li>
        <li className="btn btn-lg btn-outline-danger">Team 10</li>
      </ul>
    </div>
  );
};

export default DraftOrder;
