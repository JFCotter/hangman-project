import React							from "react";
import {BrowserRouter, Routes, Route}	from "react-router-dom";
import Backdrop							from "./components/Backdrop/Backdrop.jsx";
import Header							from "./components/Header/Header.jsx";
import Footer							from "./components/Footer/Footer.jsx";
import GameContainer					from "./components/GameContainer/GameContainer.jsx";
import LandingPageContent				from "./components/LandingPageContent/LandingPageContent.jsx";
import "./globals.scss";

const App = () => {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={
							<>
								<Backdrop isBlurred={true} />
								<div style={{ position : "absolute" }}>
									<main><LandingPageContent/></main>
									<Footer/>
								</div>
							</>
						}
					/>
					<Route path="/game" element={
							<>
								<Backdrop isBlurred={false} />
								<div style={{ position : "absolute" }}>
									<Header/>
									<main><GameContainer/></main>
									<Footer/>
								</div>
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);

};

export default App;