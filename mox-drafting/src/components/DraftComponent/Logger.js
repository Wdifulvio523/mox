import React from "react";

const Logger = props => {
  return (
    <div className="logger">
      Last Pick: {props.draftedPlayer.position}{" "}
      {props.draftedPlayer.displayName}
    </div>
  );
};

export default Logger;
