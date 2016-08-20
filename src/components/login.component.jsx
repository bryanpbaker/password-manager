import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="login">
				<h1>Login</h1>
				<form>
					<div className="form-group">
						<label htmlFor="">Email:</label>
						<input className="form-control" type="email"/>
					</div>
					<div className="form-group">
						<label htmlFor="">Password:</label>
						<input className="form-control" type="password"/>
					</div>
					<div className="form-group">
						<button className="btn btn-success">Login</button>
					</div>
				</form>
				<Link className="text-info" to="register">Don't have an account? Register!</Link>
			</div>
		)
	}
}