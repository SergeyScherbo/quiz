import React from 'react';

const Table = ({ arr }) => {
	if (arr.length === 0) {
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
						arr.map(el => (
							<tr key={el.id}>
								<td>{el.quizName}</td>
								<td>{el.quizTheme}</td>
								<td>{el.date}</td>
								<td className="btn-group table--160">
									<button className="btn btn--primary">Begin</button>
									<button className="btn btn--danger">Delete</button>
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