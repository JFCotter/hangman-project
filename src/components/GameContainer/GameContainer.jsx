import React from "react";
import LetterOutput from "../../components/LetterOutput/LetterOutput.jsx";
import LetterButton from "../../components/LetterButton/LetterButton.jsx";

const GameContainer = () => {
  // Using a Set, so that by-design, the same letter cannot be added twice.
  const [guessedLetters, setGuessedLetters] = React.useState(new Set([]));

  return (
    <div>
      <b>Hangman</b>
      <br />

      {[..."Test"].map((letter, index) => (
        <LetterOutput key={index} />
      ))}
    </div>
  );
};

export default GameContainer;
