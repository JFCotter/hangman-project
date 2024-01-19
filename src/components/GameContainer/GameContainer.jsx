import React from "react";
import getRandomWord from "../../utilities/dataRetrieval.js"
import LetterOutput from "../../components/LetterOutput/LetterOutput.jsx";
import LetterButton from "../../components/LetterButton/LetterButton.jsx";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator.jsx";

const GameContainer = () => {
	
  const [gameWord, setGameWord] = React.useState( getRandomWord() );
  
  // Using a Set, so that by-design, the same letter cannot be added twice.
  const [guessedLetters, setGuessedLetters] = React.useState(new Set([]));

  // ["A", "B", "C", ...]
  const alphabet = new Set(
    Array.from({ length: 26 }, (e, i) => i + 65).map((e) =>
      String.fromCharCode(e)
    )
  );

  return (
	<div>
		
		<ProgressIndicator/>

		<br />

		{
			[...gameWord].map(
				(letter, index) => <LetterOutput key={index} targetLetter={letter.toUpperCase()} guessedLettersP={guessedLetters} />
			)
		}

		<br />
		<br />

		{
			[...alphabet].map(
				(letter, index) => <LetterButton key={index} letterOfAlphabet={letter.toUpperCase()} guessedLettersP={guessedLetters} setGuessedLettersP={setGuessedLetters} />
			)
		}

	</div>
  );
};

export default GameContainer;
