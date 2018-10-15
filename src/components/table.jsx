import React from 'react';

const Table = ({ arr }) => {
	const cellWidth = {
		width: 100
	};

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
					<tr>
						<td>USA</td>
						<td>Country</td>
						<td>18.03.2018</td>
						<td className="btn-group table--160">
							<button className="btn btn--primary">Begin</button>
							<button className="btn btn--danger">Delete</button>
						</td>
					</tr>
					<tr>
						<td>Math</td>
						<td>Numbers</td>
						<td>22.12.2017</td>
						<td className="btn-group table--160">
							<button className="btn btn--primary">Begin</button>
							<button className="btn btn--danger">Delete</button>
						</td>
					</tr>
					<tr>
						<td>Programming basics</td>
						<td>Programming</td>
						<td>31.03.2018</td>
						<td className="btn-group table--160">
							<button className="btn btn--primary">Begin</button>
							<button className="btn btn--danger">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default Table;