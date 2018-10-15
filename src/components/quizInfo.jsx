import React from 'react';

const QuizInfo = ({ name, theme, onChangeName, onChangeTheme }) => {
	return (
		<div className="info">
			<div className="info__el">
				<label className="label">Quiz name</label>
				<textarea
					className="field field--big"
					onChange={onChangeName}
					value={name}
					placeholder="Name">
				</textarea>
			</div>
			<div className="info__el">
				<label className="label">Quiz theme</label>
				<textarea
					className="field field--big"
					onChange={onChangeTheme}
					value={theme}
					placeholder="Theme">
				</textarea>
			</div>
		</div>
	);
}

export default QuizInfo;