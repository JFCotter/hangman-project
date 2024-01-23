import React	from "react";
import styles	from "./LetterButton.module.scss"

const LetterButton = ({ letterOfAlphabet, guessedLettersP, setGuessedLettersP }) => {
	return (
		<button
			className={styles.LetterButton}
			onClick = {
				() => {
					setGuessedLettersP(new Set([...guessedLettersP, letterOfAlphabet.toUpperCase()]));
					console.warn("LetterButton set guessedLetters to: " + [...(new Set([...guessedLettersP, letterOfAlphabet.toUpperCase()]))]);
				}
			}
		>
			{letterOfAlphabet.toUpperCase()}
		</button>
	);
};

export default LetterButton;