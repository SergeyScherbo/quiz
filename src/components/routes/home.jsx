import React, { Component } from 'react';
import PageStart from '../common/pageStart';

class Home extends Component {
	state = {};

	render() {
		return (
			<React.Fragment>
				<PageStart
					heading={`Welcome to the Quiz Generator`}
					text={`Create quiz and share it with your friend!`}
				/>
			</React.Fragment>
		);
	}
}

export default Home;