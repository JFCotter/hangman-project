import React from "react";
import styles from "./LetterOutput.module.css";

const LetterOutput = ({ targetLetter, guessedLettersP }) => {
  return <span className={styles.LetterOutput}>{
   [...guessedLettersP].includes(targetLetter) ? targetLetter : "_"
  }</span>;
};

export default LetterOutput;
