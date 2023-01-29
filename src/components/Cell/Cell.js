import React from "react";

function Cell({ letter, variant }) {
  return <span className={`cell ${variant}`}>{letter}</span>;
}

export default Cell;
