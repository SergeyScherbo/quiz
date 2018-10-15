import React from 'react';

const PageStart = ({ heading, text }) => {
	return (
		<div className="pageStart">
			<h1 className="heading heading--l1">{heading}</h1>
			<p className="text">{text}</p>
		</div>
	);
}

export default PageStart;