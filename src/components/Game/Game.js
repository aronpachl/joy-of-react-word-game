import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../Guesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../Banner/WonBanner";
import LostBanner from "../Banner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [status, setStatus] = React.useState("play");
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmitGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    if (guess.guess === answer.toUpperCase()) {
      setStatus("win");
    } else if (
      nextGuesses.length >= NUM_OF_GUESSES_ALLOWED &&
      guess.guess !== answer.toUpperCase()
    ) {
      setStatus("lost");
    }

    setGuesses(nextGuesses);
  };

  console.log(status);

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} status={status} />
      {status === "win" && <WonBanner numOfGuesses={guesses.length} />}
      {status === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
