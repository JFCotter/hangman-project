import React from "react";
import styles from "./LetterButton.module.css";

const LetterButton = ({ letterOfAlphabet, guessedLettersP, setGuessedLettersP }) => {
  return (
	<button onClick = {
    () => {
        setGuessedLettersP(new Set([...guessedLettersP, letterOfAlphabet]));
    }
  }
  >{
    letterOfAlphabet
  }</button>
  );
};

export default LetterButton;
