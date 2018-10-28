import React, { Component } from 'react';
import Field from './field';

class Form extends Component {
	state = {

	};

	handleChange = (event) => {
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value
		});
	};

	renderInput(name, label, type = 'text') {
		return <Field
			name={name}
			label={label}
			type={type}
			value={this.state[name]}
			onChange={this.handleChange}
		/>
	}

	renderButton(name) {
		return <button className="btn btn--primary">{name}</button>
	}
}

export default Form;