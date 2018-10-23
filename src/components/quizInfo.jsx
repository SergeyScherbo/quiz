import React from 'react';

const QuizInfo = ({ name, theme, onChange }) => {
	return (
		<div className="info">
			<div className="info__el">
				<label className="label">Quiz name</label>
				<textarea
					className="field field--big"
					name="quizName"
					onChange={onChange}
					value={name}
					placeholder="Name">
				</textarea>
			</div>
			<div className="info__el">
				<label className="label">Quiz theme</label>
				<textarea
					className="field field--big"
					name="quizTheme"
					onChange={onChange}
					value={theme}
					placeholder="Theme">
				</textarea>
			</div>
		</div>
	);
}

export default QuizInfo;