import React from "react";
import Cell from "../Cell";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const letters = checkGuess(guess, answer);
  return (
    <>
      {letters.map((letterItem) => (
        <Cell
          key={crypto.randomUUID()}
          letter={letterItem.letter}
          variant={letterItem.status}
        />
      ))}
    </>
  );
}

export default Guess;
