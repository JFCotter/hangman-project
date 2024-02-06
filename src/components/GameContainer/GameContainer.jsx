import React				from "react";
import getRandomWord		from "../../utilities/dataRetrieval.js"
import LetterOutput			from "../../components/LetterOutput/LetterOutput.jsx";
import LetterButton			from "../../components/LetterButton/LetterButton.jsx";
import {ProgressIndicator}	from "../../components/ProgressIndicator/ProgressIndicator.jsx";
import styles				from "./GameContainer.module.scss";

const alphabet = new Set(Array.from({ length : 26 }, (e, i) => i + 65).map(e => String.fromCharCode(e)));

const GameContainer = () => {

	// setGameWord not needed because the gameWord should only be set on page load.
	const [gameWord] = React.useState( getRandomWord().toUpperCase() );
	console.debug(`gameWord: ${gameWord}`);

	// Using a Set, so that by-design, the same letter cannot be added twice.
	const [guessedLetters, setGuessedLetters] = React.useState(new Set([]));

	const numIncorrectGuessesAllowed	= 11;
	const numIncorrectGuessesMade		= guessedLetters.size - (new Set([...gameWord].filter(letter => [...guessedLetters].includes(letter.toUpperCase())))).size;
	const numIncorrectGuessesRemaining	= numIncorrectGuessesAllowed - numIncorrectGuessesMade;

	const gameHasBeenLost	= (numIncorrectGuessesRemaining < 1);
	const gameHasBeenWon	= ([...gameWord].every(ltr => [...guessedLetters].includes(ltr.toUpperCase())));

	React.useEffect(() => {

		console.debug("Registering keyDown handler");
		function handleKeyDown(e) {
			console.debug("Key Pressed: " + e.key);
			if ( [...alphabet].includes(e.key.toUpperCase()) && !(gameHasBeenLost || gameHasBeenWon)) {
				console.debug("Updating guessedLetters to: " + [...new Set([...guessedLetters, e.key.toUpperCase()])]);
				setGuessedLetters(new Set([...guessedLetters, e.key.toUpperCase()]));
				console.debug("Updated guessedLetters to: " + [...guessedLetters]);
		  }
		}
	
		document.addEventListener('keydown', handleKeyDown);
	
		// Don't forget to clean up
		return function cleanup() {
		 document.removeEventListener('keydown', handleKeyDown);
		}
	  }, [guessedLetters]);

	return (
		<section className={styles.gameContainerGrid}>
			
			<ProgressIndicator
				className={styles.ProgressIndicator}
				numIncorrectGuessesMade={numIncorrectGuessesMade}
				numIncorrectGuessesRemaining={numIncorrectGuessesRemaining}
				gameHasBeenLost={gameHasBeenLost}
				gameHasBeenWon={gameHasBeenWon}
			/>

			<div className={styles.letterOutputsContainer}>
				{
					[...gameWord].map(
						(letter, index) => <LetterOutput key={index} targetLetter={letter.toUpperCase()} guessedLettersP={guessedLetters} gameHasBeenLost={gameHasBeenLost} />
					)
				}
			</div>

			<div className={styles.letterButtonsContainer}>
				{
					[...alphabet].map(
						(letter, index) => <LetterButton
							key={index}
							letterOfAlphabet={letter.toUpperCase()}
							guessedLettersP={guessedLetters}
							setGuessedLettersP={setGuessedLetters}
							gameIsOver={gameHasBeenLost || gameHasBeenWon}
						/>
					)
				}
			</div>

		</section>
	);

};

export default GameContainer;