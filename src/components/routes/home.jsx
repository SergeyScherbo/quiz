import React from 'react';
import { Link } from 'react-router-dom';

import Table from '../common/table';
import PageStart from '../common/pageStart';

const Home = ({ quizArray }) => {
	return (
		<React.Fragment>
			<PageStart
				heading="Welcome to the quiz generator"
				text="Create quiz and share it with your friends!"
			/>
			<Table arr={quizArray} />
			<div className="btn-group--mtop">
				<Link to="/create" className="btn btn--success">Create quiz</Link>
			</div>
		</React.Fragment>
	);
}

export default Home;