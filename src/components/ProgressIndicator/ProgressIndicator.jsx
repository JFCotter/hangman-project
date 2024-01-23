import React from "react";
import styles from "./ProgressIndicator.module.scss";

const ProgressIndicator = () => {
  return (
    <figure>
      <img src="/stages/stage_11.PNG" className={styles.ProgressIndicator} alt="Hangman Graphic" />
      <figcaption>11 guess(es) remaining</figcaption>
    </figure>
  );
};

export default ProgressIndicator;
