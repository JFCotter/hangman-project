import React					from "react";
import { useNavigate }			from 'react-router-dom';
import styles					from "./LandingPageContent.module.scss";

const LandingPageContent = () => {

	// Send the {customGameWord} to /game
	const navigate = useNavigate();
	const [customGameWord, setCustomGameWord] = React.useState("");

	return (
		<div>

			<header>
				<h2>The Hangman Reacts - Welcome!</h2>
			</header>

			<main className={styles.landingPageParagraphsMargins}>
				<p>
					Having joined Ageas 4 months' ago in September 2023, this project represents the culmination of our rotation with the "Development" department. Prior to beginning to collaborate and develop "The Hangman Reacts" (get it?), we undertook a number of individual and partially-collaborative projects, in pursuit of broadening and deepening our understanding of a number of web-development technologies, whereof we previously had differing levels of experience.
					<br/>
					<br/>
					<b>This project had us learn & use:</b>
				</p>
				<ul>
					<li>HTML, JavaScript, and CSS</li>
					<li>NodeJS & NPM</li>
					<li>Git SCM</li>
					<li>React (JSX, create-react-app)</li>
					<li>SASS (SCSS)</li>
				</ul>
				<p>
					This is a React project built by Ben Mullan, Cian Perrett and James Cotter during our Digital Development rotation with Ageas. 
					<br/>
					<br/>
					<b>Game Rules:</b>
				</p>
				<ul>
					<li>A word is randomly selected from a list.</li>
					<li>The player must guess all the letters of the word to win.</li>
					<li>The player has 11 chances, each wrong guess uses up a chance.</li>
					<li>If the player runs out of chances before the word is completely guessed, they lose.</li>
				</ul>
				<p>
					This rotation has allowed us to improve our skills using HTML, JavaScript, CSS and React. These have allowed us to develop streamlined Ageas webpages to remove dead code, providing us with an understanding on how an official webpage would be built and utilised within an organisation. The gradual development of these skills has allowed us to work on our final project (hangman) where we were able to utilise all of our learning to produce a webpage containing complex HTML, CSS and JavaScript.
				</p>

				Want to set your own word? Type it here:&nbsp;
				<input type="text" onChange={e => setCustomGameWord(e.target.value)} value={customGameWord} />
				<br/>
				Leave blank, to have a random word selected for you.
				<br/><br/>
				
				<button className="desertButton" onClick={() => navigate("/game", { state : { customGameWord : customGameWord } })}>Play Game...</button>
				
			</main>

		</div>
	);

};

export default LandingPageContent;