import React from "react";
import styles from "./LetterButton.module.css";

const LetterButton = ({ letterOfAlphabet }) => {
  return (
	<button>{letterOfAlphabet}</button>
  );
};

export default LetterButton;
