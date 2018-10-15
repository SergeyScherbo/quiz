import React from 'react';
import { Link } from 'react-router-dom';

import Table from './table';
import PageStart from './pageStart';

const Home = () => {
	return (
		<React.Fragment>
			<PageStart
				heading="Welcome to the quiz generator"
				text="Create quiz and share it with your friends!"
			/>
			<Table arr={[1, 2, 3]} />
			<div className="btn-group--mtop">
				<Link to="/create" className="btn btn--success">Create quiz</Link>
			</div>
		</React.Fragment>
	);
}

export default Home;