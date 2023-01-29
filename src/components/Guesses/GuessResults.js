import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <p key={crypto.randomUUID()} className="guess">
          {guesses[i] ? (
            <>
              <Guess guess={guesses[i].guess} answer={answer} />
            </>
          ) : (
            <>
              {range(0, 5).map(() => (
                <Cell key={crypto.randomUUID()} />
              ))}
            </>
          )}
        </p>
      ))}
    </div>
  );
}

function Cell({ letter }) {
  return <span className="cell">{letter}</span>;
}

export default GuessResults;
