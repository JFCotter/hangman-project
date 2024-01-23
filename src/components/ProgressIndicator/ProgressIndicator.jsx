import React from "react";
import styles from "./ProgressIndicator.module.scss";

const ProgressIndicator = ({ guessedLettersP, gameWordP }) => {

  const numIncorrectGuessesAllowed	= 11;
  let numIncorrectGuessesMade		= guessedLettersP.size - (new Set([...gameWordP].filter(letter => [...guessedLettersP].includes(letter.toUpperCase())))).size;
  let numIncorrectGuessesRemaining	= numIncorrectGuessesAllowed - numIncorrectGuessesMade;

  return (
    <figure>
      <img src={`/stages/stage_${numIncorrectGuessesMade.toString().padStart(2, "0")}.PNG`} alt="Hangman Graphic" className={styles.hangmanGraphic} />
      <figcaption>{numIncorrectGuessesRemaining} guess{ (numIncorrectGuessesRemaining != 1) && "es" }  remaining</figcaption>
    </figure>
  );

};

export default ProgressIndicator;