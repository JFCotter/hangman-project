import React from "react";
import styles from "./LetterOutput.module.scss";

const LetterOutput = ({ targetLetter, guessedLettersP }) => {
	return (
		<span className={styles.LetterOutput}>
			{
				[...guessedLettersP].includes(targetLetter.toUpperCase())
					? targetLetter.toUpperCase()
					: "_"
			}
		</span>
	);
};

export default LetterOutput;