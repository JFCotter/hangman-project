import React from "react";
import LetterOutput from "../../components/LetterOutput/LetterOutput.jsx";
import LetterButton from "../../components/LetterButton/LetterButton.jsx";

const GameContainer = () => {
  // Using a Set, so that by-design, the same letter cannot be added twice.
  const [guessedLetters, setGuessedLetters] = React.useState(new Set([]));

  const word = "randomword";



  // ["A", "B", "C", ...]
  const alphabet = new Set(
    Array.from({ length: 26 }, (e, i) => i + 65).map((e) =>
      String.fromCharCode(e)
    )
  );

  return (
    <div>
      <b>Hangman</b>
      <br />

      {[...word].map((letter) => (
        <LetterOutput key={letter} targetLetter={letter} />
      ))}

      <br />
      <br />

      {[...alphabet].map((letter) => (
        <LetterButton key={letter} letterOfAlphabet={letter} />
      ))}
    </div>
  );
};

export default GameContainer;
