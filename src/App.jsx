import React		from "react"
import HMHeader		from "./components/HMHeader/HMHeader.jsx"
import HMFooter 	from "./components/HMFooter/HMFooter.jsx"
import LetterOutput	from "./components/LetterOutput/LetterOutput.jsx"

const App = () => {

	const word = "Testing"

	return (
		<main style={{ textAlign : "center" }}>
			<HMHeader/>
			<b>Hangman</b>
			<br/>

			{
				[...word].map(
					(letter, index) => <LetterOutput key={index} />
					)
				}

			<HMFooter/>
		</main>
	)

}

export default App