import React	from "react";
import styles	from "./ProgressIndicator.module.scss";

const ProgressIndicator = (
		{
			numIncorrectGuessesMade,
			numIncorrectGuessesRemaining,
			numIncorrectGuessesAllowed,
			gameHasBeenLost,
			gameHasBeenWon
		}
	) => {
	
	const renderGameOverBanner = (message) =>
	<div>
		<div className={styles.gameOverMessage}>{message}<br/></div>
		<button className="desertButton" onClick={() => window.location.reload()}>New Game</button>
	</div>;

	const renderProgressCaption = () => {
		switch (true) {
			case gameHasBeenLost:	return renderGameOverBanner("Game Lost!");
			case gameHasBeenWon:	return renderGameOverBanner("Game Won!!");
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
				<meter
					value={numIncorrectGuessesMade}
					min={0}
					max={numIncorrectGuessesAllowed}
					low={Math.round(0.0 * numIncorrectGuessesAllowed)}
					high={Math.round(0.7 * numIncorrectGuessesAllowed)}
					style={{ rotate : "180deg", display : ((gameHasBeenLost || gameHasBeenWon) ? "none" : "inline") }}
				/>
				<br/>
				{ renderProgressCaption() }
			</figcaption>
		</figure>
	);

};

export { ProgressIndicator };