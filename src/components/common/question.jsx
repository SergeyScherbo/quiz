import React from 'react';

const Question = ({ question, quizLength, currentQuestion, onPickOption, onAnswer }) => {
	const disabled = question.options.every(option => !option.isChosen);
	return (
		<div className="question">
			<h3 className="heading heading--l3">{question.title}</h3>
			<ul className="question__options">
				{question.options.map(option => (
					<li key={option.id} className="question__option">
						<div className="question__option-wrp" onClick={onPickOption(question.id, option)}>
							<div className={`radio ${option.isChosen ? "radio--active" : ""}`}></div>
							<div className="text">{option.value}</div>
						</div>
					</li>
				))}
			</ul>
			<div className="btn-group btn-group--mtop">
				{
					quizLength - 1 === currentQuestion
						? <button className={`btn btn--success ${disabled ? "btn--disabled" : ""}`} onClick={onAnswer(disabled, question)}>Finish quiz</button>
						: <button className={`btn btn--primary ${disabled ? "btn--disabled" : ""}`} onClick={onAnswer(disabled, question)}>Answer</button>
				}
			</div>
		</div>
	);
}

export default Question;