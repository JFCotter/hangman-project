import React	from "react";
import styles	from "./LetterOutput.module.scss";

const LetterOutput = ({ targetLetter, guessedLettersP, gameHasBeenLost }) => {

	const hasBeenGuessed = [...guessedLettersP].includes(targetLetter.toUpperCase());

	return (
		<span className={`${styles.letterOutput} ${hasBeenGuessed && styles.hasBeenGuessed} ${(gameHasBeenLost && !hasBeenGuessed) && styles.unguessedGameLost}`}>
			{ (hasBeenGuessed || gameHasBeenLost) ? targetLetter.toUpperCase() : "_" }
		</span>
	);

};

export default LetterOutput;