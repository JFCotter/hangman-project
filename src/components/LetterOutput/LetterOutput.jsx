import React	from "react";
import styles	from "./LetterOutput.module.scss";

const LetterOutput = ({ targetLetter, guessedLettersP }) => {

	const hasBeenGuessed = [...guessedLettersP].includes(targetLetter.toUpperCase());

	return (
		<span className={`${styles.letterOutput} ${hasBeenGuessed && styles.hasBeenGuessed}`}>
			{ hasBeenGuessed ? targetLetter.toUpperCase() : "_" }
		</span>
	);

};

export default LetterOutput;