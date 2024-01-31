import React from "react";
import styles from "./Backdrop.module.scss";

const Backdrop = ({ isBlurred }) => {
	return (
		<div
			className={`${styles.backdropImg} ${isBlurred && styles.blurredBackground}`}
		/>
	);
};

export default Backdrop;