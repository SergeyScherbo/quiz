import React from 'react';
import Option from './common/option';

const QuestionList = (props) => {
	const {
		questions,
		onChangeQuestion,
		onChangeOption,
		onPickAnswer,
		onAddOption,
		onRemoveOption,
		onRemoveQuestion
	} = props;

	if (questions.length === 0) {
		return null;
	}

	return (
		<ul className="questionList">
			{questions.map(question => (
				<li className="questionList__el" key={question.id}>
					<div className="questionList__block">
						<label className="label">Question</label>
						<textarea
							className="field field--big"
							onChange={onChangeQuestion(question)}
							value={question.title}
							placeholder="Your question">
						</textarea>
					</div>
					<div className="questionList__block">
						<label className="label label--small">Options</label>
						{question.options.map(option => (
							<Option
								key={option.id}
								question={question}
								option={option}
								onChangeOption={onChangeOption}
								onPickAnswer={onPickAnswer}
							/>
						))}
					</div>
					<div className="btn-group">
						<button className="btn btn--primary" onClick={onAddOption(question.id)}>Add option</button>
						{
							question.options.length > 2
								? <button className="btn btn--danger" onClick={onRemoveOption(question.id)}>Remove option</button>
								: null
						}
						<button className="btn btn--danger" onClick={onRemoveQuestion(question.id)}>Remove</button>
					</div>
				</li>
			))}
		</ul>
	);
}

export default QuestionList;