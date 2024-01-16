import React			from "react"
import HMLetterOutput	from "./components/HMLetterOutput/HMLetterOutput.jsx"

const HMGameContainer = () => {

	const [guessedLetters, setGuessedLetters] = React.useState([]);

	return (
		<div>

			<b>Hangman</b>
			<br/>

			{
				[...word].map(
					(letter, index) => <HMLetterOutput key={index} />
				)
			}

		</div>
	)

}

export default HMGameContainer