import React from "react";
import styles from "./ProgressIndicator.module.scss";

const ProgressIndicator = ({ guessedLettersP, gameWordP }) => {

	const numIncorrectGuessesAllowed		= 11;
	const numIncorrectGuessesMade			= guessedLettersP.size - (new Set([...gameWordP].filter(letter => [...guessedLettersP].includes(letter.toUpperCase())))).size;
	const numIncorrectGuessesRemaining	= numIncorrectGuessesAllowed - numIncorrectGuessesMade;

	(numIncorrectGuessesRemaining < 1) && window.alert("Game Over!");


	  [...gameWordP].every(letter => [...guessedLettersP].includes(letter.toUpperCase())) && window.alert("You Win!!");

	return (
		<figure>
			<img
				className={styles.hangmanGraphic}
				src={`/stages/stage_${numIncorrectGuessesMade.toString().padStart(2, "0")}.PNG`}
				alt="Hangman Graphic"
			/>
			<figcaption>{numIncorrectGuessesRemaining} guess{ (numIncorrectGuessesRemaining != 1) && "es" }  remaining</figcaption>
		</figure>
	);

};

export {ProgressIndicator};