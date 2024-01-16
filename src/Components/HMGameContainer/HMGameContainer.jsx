import React			from "react"
import HMLetterOutput	from "./components/HMLetterOutput/HMLetterOutput.jsx"

const HMGameContainer = () => {

	// Using a Set, so that by-design, the same letter cannot be added twice.
	const [guessedLetters, setGuessedLetters] = React.useState(new Set([]));

	return (
		<div>

			<b>Hangman</b>
			<br/>

			{
				[..."Test"].map(
					(letter, index) => <HMLetterOutput key={index} />
				)
			}

		</div>
	)

}

export default HMGameContainer