import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ progress }) => {
	const correctAnswers = progress.filter(p => p === 1);
	const percentage = correctAnswers.length / progress.length * 100;
	let message = '';

	if (percentage <= 50) {
		message = `Sorry, but only ${percentage}% of your answers are correct... Next time will be better!`;
	} else if (percentage > 50 && percentage < 90) {
		message = `Very good, ${percentage}% of your answers are correct!`;
	} else {
		message = `Awesome, ${percentage}% of your answers are correct!`;
	}

	return (
		<React.Fragment>
			<h3 className="heading heading--l3">{message}</h3>
			<div className="btn-group btn-group--mtop">
				<Link className="btn btn--primary" to="/">Return</Link>
			</div>
		</React.Fragment>
	);
}

export default Result;