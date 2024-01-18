import React from "react";
import styles from "./LetterOutput.module.css";

const LetterOutput = ({ targetLetter, guessedLettersP }) => {
	return (
		<span className={styles.LetterOutput}>
			{
				(
					() => {
						console.info(`Rendering LetterOutput for ${targetLetter.toUpperCase()} as ${[...guessedLettersP].includes(targetLetter.toUpperCase()) ? targetLetter.toUpperCase() : "_"}\r\nguessedLettersP: ${[...guessedLettersP]} includes ${targetLetter.toUpperCase()} = ${[...guessedLettersP].includes(targetLetter.toUpperCase())}`);
						return ([...guessedLettersP].includes(targetLetter.toUpperCase()) ? targetLetter.toUpperCase() : "_");
					}
				)()
			}
		</span>
	);
};

export default LetterOutput;