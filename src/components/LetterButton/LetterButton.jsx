import React	from "react";
import styles	from "./LetterButton.module.css";

const LetterButton = ({ letterOfAlphabet, guessedLettersP, setGuessedLettersP }) => {
	return (
		<button
			className={styles.LetterButton}
			onClick = {
				() => setGuessedLettersP(new Set([...guessedLettersP, letterOfAlphabet.toUpperCase()]))
			}
		>
			{letterOfAlphabet.toUpperCase()}
		</button>
	);
};

export default LetterButton;