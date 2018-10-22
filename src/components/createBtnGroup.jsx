import React from 'react';

const CreateBtnGroup = ({ onAddQuestion, onCreateQuiz, questionsLength }) => {
	return (
		<div className="btn-group">
			<button className="btn btn--primary" onClick={onAddQuestion}>Add question</button>
			{
				questionsLength > 1
					? <button className="btn btn--success" onClick={onCreateQuiz}>Create quiz</button>
					: null
			}
		</div>
	);
}

export default CreateBtnGroup;