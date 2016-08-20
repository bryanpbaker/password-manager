import React, { Component } from 'react';

export default class Register extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="register">
				<h1>Register</h1>
				<form>
					<div className="form-group">
						<label htmlFor="">Name:</label>
						<input className="form-control" type="text"/>
					</div>
					<div className="form-group">
						<label htmlFor="">Email:</label>
						<input className="form-control" type="text"/>
					</div>
					<div className="form-group">
						<label htmlFor="">Password:</label>
						<input className="form-control" type="text"/>
					</div>
					<div className="form-group">
						<label htmlFor="">Repeat Password:</label>
						<input className="form-control" type="text"/>
					</div>
					<div className="form-group">
						<button className="btn btn-success">Register</button>
					</div>
				</form>
			</div>
		)
	}
}