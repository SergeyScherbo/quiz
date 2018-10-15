import React from 'react';
import { Link } from 'react-router-dom';

const CreateBtnGroup = ({ quiz, onAddQuestion, onCreateQuiz, questionsLength }) => {
	return (
		<div className="btn-group">
			<button className="btn btn--primary" onClick={onAddQuestion}>Add question</button>
			{
				questionsLength > 1
					? <Link to="/" className="btn btn--success" onClick={onCreateQuiz(quiz)}>Create quiz</Link>
					: null
			}
		</div>
	);
}

export default CreateBtnGroup;