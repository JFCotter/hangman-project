import React	from "react";
import styles	from "./ProgressIndicator.module.scss";

const ProgressIndicator = (
		{
			numIncorrectGuessesMade,
			numIncorrectGuessesRemaining,
			gameHasBeenLost,
			gameHasBeenWon
		}
	) => {
	
	const renderProgressCaption = () => {
		switch (true) {
			case gameHasBeenLost:	return <span className={`${styles.gameOverBlock} ${styles.gameLostColours}`}> Game Lost! <button onClick={() => window.location.reload()}>New Game</button> </span>;
			case gameHasBeenWon:	return <span className={`${styles.gameOverBlock} ${styles.gameWonColours}`}> Game Won!! <button onClick={() => window.location.reload()}>New Game</button> </span>;
			default:				return <span> { numIncorrectGuessesRemaining } guess{ (numIncorrectGuessesRemaining !== 1) && "es" } remaining </span>;
		}
	};

	return (
		<figure>
			<img
				className={styles.hangmanGraphic}
				src={`/stages/stage_${numIncorrectGuessesMade.toString().padStart(2, "0")}.PNG`}
				alt="Hangman Graphic"
			/>
			<figcaption>
				{ renderProgressCaption() }
			</figcaption>
		</figure>
	);

};

export { ProgressIndicator };