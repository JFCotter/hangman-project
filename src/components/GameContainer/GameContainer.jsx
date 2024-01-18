import React from "react";
import WordsList from "../../words.js";
import LetterOutput from "../../components/LetterOutput/LetterOutput.jsx";
import LetterButton from "../../components/LetterButton/LetterButton.jsx";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator.jsx";

const GameContainer = () => {
	
  const getRandomWord = (source) => {
    const randomIndex = Math.floor(Math.random()*source.length);
    const randomWord = source[randomIndex];
    return randomWord;
  }

  const [gameWord, setGameWord] = React.useState( getRandomWord(WordsList) );
  
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
