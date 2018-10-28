import React from 'react';

const Field = ({ name, label, type, value, onChange }) => {
	return (
		<div className="field-wrp">
			{/* <label className="label" htmlFor={name}>{label}</label> */}
			<input
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				type={type}
				className="field"
				placeholder={"Enter your " + name}
			/>
		</div>
	);
}

export default Field;