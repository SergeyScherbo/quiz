import React, { Component } from 'react';
import Form from '../common/form';

class Login extends Form {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = (event) => {
		event.preventDefault();

		console.log(this.state);
		// server request...
	}

	render() {
		return (
			<div className="form">
				<p className="text">Login form</p>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('email', 'Email', 'email')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderButton('Login')}

					<p className="text">Forgot your password?</p>
					<p className="text">Do not have an account?</p>
				</form>
			</div>
		);
	}
}

export default Login;