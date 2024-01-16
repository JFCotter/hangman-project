import React			from "react"
import HMHeader			from "./components/HMHeader/HMHeader.jsx"
import HMFooter 		from "./components/HMFooter/HMFooter.jsx"
import HMGameContainer	from "./components/HMGameContainer/HMGameContainer.jsx"

const App = () => {

	return (
		<>
			<HMHeader/>
			<main style={{ textAlign : "center" }}>
				<HMGameContainer/>
				<HMGameContainer/>
			</main>
			<HMFooter/>
		</>
	)

}

export default App