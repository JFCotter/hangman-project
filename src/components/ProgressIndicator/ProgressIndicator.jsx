import React from "react";

const ProgressIndicator = ({ guessedLettersP, gameWordP }) => {

	const numIncorrectGuessesAllowed	= 11;
	let numIncorrectGuessesMade			= guessedLettersP.size - (new Set([...gameWordP].filter(letter => [...guessedLettersP].includes(letter.toUpperCase())))).size;
	let numIncorrectGuessesRemaining	= numIncorrectGuessesAllowed - numIncorrectGuessesMade;

	return (
		<figure>
			<img src="/stages/stage_11.PNG" alt="Hangman Graphic" />
			<figcaption>{numIncorrectGuessesRemaining} guess{ (numIncorrectGuessesRemaining != 1) && "es" }  remaining</figcaption>
		</figure>
	);

};

export default ProgressIndicator;
