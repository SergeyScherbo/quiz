import React from 'react';

const Option = ({ question, option, onChangeOption, onPickAnswer }) => {
	const optionIndex = question.options.indexOf(option);
	return (
		<div className="option">
			<input
				className="field"
				onChange={onChangeOption(question.id, option)}
				value={option.value}
				type="text"
				placeholder={`Answer #${optionIndex + 1}`}
			/>
			<div
				className={`radio ${option.isCorrect ? 'radio--active' : ''}`}
				onClick={onPickAnswer(question.id, option)}>
			</div>
		</div>
	);
}

export default Option;