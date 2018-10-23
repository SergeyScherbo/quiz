import React from 'react';

const CreateBtnGroup = ({ disabled, onAddQuestion, onCreateQuiz, questionsLength }) => {
	let classes = "btn btn--success";
	classes += disabled ? " btn--disabled" : "";
	return (
		<div className="btn-group">
			<button className="btn btn--primary" onClick={onAddQuestion}>Add question</button>
			{
				questionsLength > 1
					? <button disabled={disabled} className={classes} onClick={onCreateQuiz}>Create quiz</button>
					: null
			}
		</div>
	);
}

export default CreateBtnGroup;