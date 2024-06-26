import React				from "react";
import { useLocation }		from "react-router-dom";
import getRandomWord		from "../../utilities/dataRetrieval.js"
import LetterOutput			from "../../components/LetterOutput/LetterOutput.jsx";
import LetterButton			from "../../components/LetterButton/LetterButton.jsx";
import {ProgressIndicator}	from "../../components/ProgressIndicator/ProgressIndicator.jsx";
import styles				from "./GameContainer.module.scss";

const alphabet = new Set(Array.from({ length : 26 }, (e, i) => i + 65).map(e => String.fromCharCode(e)));

const GameContainer = (props) => {

	// Receive state data passed from landing-page, including a {customGameWord}
	const location = useLocation();

	// setGameWord not needed because the gameWord should only be set on page load.
	const [gameWord] = React.useState( location.state.customGameWord || getRandomWord().toUpperCase() );
	console.debug(`gameWord: ${gameWord}`);

	// Using a Set, so that by-design, the same letter cannot be added twice.
	const [guessedLetters, setGuessedLetters] = React.useState(new Set([]));

	const numIncorrectGuessesAllowed	= 11;
	const numIncorrectGuessesMade		= guessedLetters.size - (new Set([...gameWord.toUpperCase()].filter(letter => [...guessedLetters].includes(letter.toUpperCase())))).size;
	const numIncorrectGuessesRemaining	= numIncorrectGuessesAllowed - numIncorrectGuessesMade;

	const gameHasBeenLost	= (numIncorrectGuessesRemaining < 1);
	const gameHasBeenWon	= ([...gameWord].every(ltr => [...guessedLetters].includes(ltr.toUpperCase())));

	// Register an event-handler to make key-presses trigger the <LetterButton>s
	React.useEffect(() => {

		function handleKeyDown(e) {
			if ( [...alphabet].includes(e.key.toUpperCase()) && !(gameHasBeenLost || gameHasBeenWon)) {
				setGuessedLetters(new Set([...guessedLetters, e.key.toUpperCase()]));
			}
		}

		document.addEventListener('keydown', handleKeyDown);
		return function cleanup() { document.removeEventListener('keydown', handleKeyDown); }

		},
		[guessedLetters]
	);

	return (
		<section className={styles.gameContainerGrid}>
			
			<ProgressIndicator
				className={styles.ProgressIndicator}
				numIncorrectGuessesMade={numIncorrectGuessesMade}
				numIncorrectGuessesRemaining={numIncorrectGuessesRemaining}
				numIncorrectGuessesAllowed={numIncorrectGuessesAllowed}
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