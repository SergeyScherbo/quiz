import React from 'react';
import Table from './table';
import Greeting from './greeting';

const Home = () => {
	return (
		<React.Fragment>
			<Greeting />
			<Table arr={[]} />
			<div className="center">
				<button className="btn btn--success">Create quiz</button>
			</div>
		</React.Fragment>
	);
}

export default Home;