import React from "react";

const Logger = props => {
  return <div>Last Pick: {props.draftedPlayer.displayName}</div>;
};

export default Logger;
