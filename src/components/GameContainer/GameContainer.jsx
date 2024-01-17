import React from "react";
import WordsList from "../../words.js";
import LetterOutput from "../../components/LetterOutput/LetterOutput.jsx";
import LetterButton from "../../components/LetterButton/LetterButton.jsx";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator.jsx";

const GameContainer = () => {
  // Using a Set, so that by-design, the same letter cannot be added twice.
  const [guessedLetters, setGuessedLetters] = React.useState(new Set([]));

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random()*WordsList.length);
    const randomWord = WordsList[randomIndex];
    return randomWord;
  }

  const [gameWord, setGameWord] = React.useState( getRandomWord() );

  /*    
  [1,2,5,2,7][ Math.floor(Math.random()*[1,2,5,2,7].length) ]
    1 read file into string
    2 parse string into JSON
    3 regard the Words member of this JSON
    4 math.random() 
  
    setGuessedLetters(new Set([...guessedLetters, targetLetter]))

  */



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
				(letter,index) => <LetterOutput key={index} targetLetter={letter} />
			)
		}

		<br />
		<br />

		{[...alphabet].map((letter) => (
			<LetterButton key={letter} letterOfAlphabet={letter} />
		))}

    </div>
  );
};

export default GameContainer;
