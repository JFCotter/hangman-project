import React from "react";
import styles from "./LetterOutput.module.css";

const LetterOutput = ({ targetLetter }) => {
  return <span className={styles.LetterOutput}>{targetLetter}</span>;
};

export default LetterOutput;
