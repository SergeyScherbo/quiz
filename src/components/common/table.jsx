import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ quizArray, onBeginQuiz, onDeleteQuiz }) => {
	if (quizArray.length === 0) {
		return <p className="text">You don't have any quiz yet...</p>
	} else {
		return (
			<table className="table">
				<thead>
					<tr>
						<th>Quiz name</th>
						<th>Theme</th>
						<th>Created</th>
						<th className="table--160">Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						quizArray.map(quiz => (
							<tr key={quiz.id}>
								<td>{quiz.quizName}</td>
								<td>{quiz.quizTheme}</td>
								<td>{quiz.date}</td>
								<td className="btn-group table--160">
									<Link
										className="btn btn--primary"
										to={{
											pathname: '/quiz-' + quiz.id,
											state: { quiz }
										}}
									>
										Begin
									</Link>
									<button className="btn btn--danger" onClick={onDeleteQuiz(quiz)}>Delete</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		);
	}
}

export default Table;