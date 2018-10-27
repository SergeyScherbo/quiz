import React from 'react';
import { Link } from 'react-router-dom';

import Table from '../common/table';
import PageStart from '../common/pageStart';

const Home = ({ quizArray, onDeleteQuiz }) => {
	return (
		<React.Fragment>
			<PageStart
				heading="Welcome to the quiz generator"
				text="Create quiz and share it with your friends!"
			/>
			<Table quizArray={quizArray} onDeleteQuiz={onDeleteQuiz} />
			<div className="btn-group btn-group--mtop">
				<Link to="/create" className="btn btn--success">Create quiz</Link>
			</div>
		</React.Fragment>
	);
}

export default Home;