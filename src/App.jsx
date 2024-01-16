import React		from "react"
import LetterOutput	from "./Components/LetterOutput/LetterOutput.jsx"

const App = () => {

	const word = "Testing"

	return (
		<main style={{ textAlign : "center" }}>
			
			<b>Hangman</b>
			<br/>

			{
				[...word].map(
					(letter, index) => <LetterOutput key={index} />
				)
			}

		</main>
	)

}

export default App