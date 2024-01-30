import React							from "react";
import {BrowserRouter, Routes, Route}	from "react-router-dom";
import Header							from "./components/Header/Header.jsx";
import Footer							from "./components/Footer/Footer.jsx";
import GameContainer					from "./components/GameContainer/GameContainer.jsx";
import LandingPageContent				from "./components/LandingPageContent/LandingPageContent.jsx";
import "./globals.scss";

const App = () => {

	// (To be changed!)
	document.body.style.backgroundImage = `url("/DesertBackdrop.png")`;
	//document.body.style.filter = "blur(3px)";

	return (
		<>
			<BrowserRouter>
				<Header/>
				<main>
					<Routes>
						<Route path="/"		element={<LandingPageContent/>}	/>
						<Route path="/game" element={<GameContainer/>}		/>
					</Routes>
				</main>
				<Footer/>
			</BrowserRouter>
		</>
	);

};

export default App;