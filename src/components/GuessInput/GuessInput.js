import React from "react";

function GuessInput({ handleSubmitGuess, status }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) return;
    console.log({ guess });
    setGuess("");
    handleSubmitGuess({ id: crypto.randomUUID(), guess });
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        required
        disabled={status !== "play"}
        value={guess}
        type="text"
        minLength={5}
        maxLength={5}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
