import React from 'react';

const Progress = ({ current, quizLength }) => {
	return (
		<div className="progress">
			<div className="progress__nums">{`${current} / ${quizLength}`}</div>
			<div className="progress__bar">
				<div className="progress__completed" style={{ width: current / quizLength * 100 + '%' }}></div>
			</div>
		</div>
	);
}

export default Progress;