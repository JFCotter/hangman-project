import React	from "react";
import styles	from "./LetterButton.module.scss"

const LetterButton = ({ letterOfAlphabet, guessedLettersP, setGuessedLettersP }) => {

	const hasBeenGuessed = [...guessedLettersP].includes(letterOfAlphabet.toUpperCase())

	return (
		<button
			className={`${styles.LetterButton} ${hasBeenGuessed && styles.hasBeenGuessed}`}
			disabled={hasBeenGuessed}
			onClick = {
				() => setGuessedLettersP(new Set([...guessedLettersP, letterOfAlphabet.toUpperCase()]))
			}
		>
			{letterOfAlphabet.toUpperCase()}
		</button>
	);
};

export default LetterButton;