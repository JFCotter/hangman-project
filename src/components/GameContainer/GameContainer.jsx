import React from "react";
import LetterOutput from "../../components/LetterOutput/LetterOutput.jsx";
import LetterButton from "../../components/LetterButton/LetterButton.jsx";

const GameContainer = () => {

  // Using a Set, so that by-design, the same letter cannot be added twice.
  const [guessedLetters, setGuessedLetters] = React.useState(new Set([]));

  // ["A", "B", "C", ...]
  const alphabet = new Set(Array.from({length : 26}, (e, i) => i + 65).map(e => String.fromCharCode(e)));

  return (
    <div>

		<b>Hangman</b>
		<br />

		{[..."Test"].map((letter, index) => (
		<LetterOutput key={index} />
		))}

		<br/><br/>

		{
			[...alphabet].map(letter => <LetterButton key={letter} letterOfAlphabet={letter} />)
		}

    </div>
  );
};

export default GameContainer;
