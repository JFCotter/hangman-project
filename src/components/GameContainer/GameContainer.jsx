import React from "react";
import WordsList from "../../words.js";
import LetterOutput from "../../components/LetterOutput/LetterOutput.jsx";
import LetterButton from "../../components/LetterButton/LetterButton.jsx";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator.jsx";

const GameContainer = () => {
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random()*WordsList.length);
    const randomWord = WordsList[randomIndex];
    return randomWord;
  }

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
				(letter,index) => <LetterOutput key={index} targetLetter={letter} guessedLettersP={guessedLetters} />
			)
		}

		<br />
		<br />

		{[...alphabet].map((letter) => (
			<LetterButton key={letter} letterOfAlphabet={letter} guessedLettersP={guessedLetters} setGuessedLettersP={setGuessedLetters} />
		))}

    </div>
  );
};

export default GameContainer;
