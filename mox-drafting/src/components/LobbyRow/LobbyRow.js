import React from "react";
import "./LobbyRow.css";

import Slot from "../Slot/Slot";
import Countdown from 'react-countdown-now';

const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class LobbyRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    const Completionist = () => <span>Draft is Closed!</span>;

    const renderer = ({ minutes, seconds, completed }) => {
      if (completed) {
        // Render a complete state
        return <Completionist />;
      } else {
        // Render a countdown
        return <span >{minutes}:{seconds}</span>;
      }
    };

    return (
      
      <tr className="w-100">
        <td className="text-center ">{this.props.scoring}</td>
        <td className="text-center ">{this.props.teams}</td>
        <td className="open-slots text-center ">
          {slots.map(num => {
            if (num <= this.props.teams) {
              return <Slot slotNumber={num} />;
            }
          })}
        </td>
        <td className="starts-in">
          <div className="mb-3">
            {
              this.props.starting === '5' ? 
              <Countdown date={Date.now() + 299000}
              renderer={renderer} />
              :
              <Countdown date={Date.now() + 599000}
              renderer={renderer} />

            }
          </div>
        </td>

      </tr>
    );
  }
}

export default LobbyRow;
