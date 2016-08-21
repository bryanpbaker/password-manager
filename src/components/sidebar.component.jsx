import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sidebar extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="col-md-3 sidebar">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to="/login" activeClassName="active">Login</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/accounts" activeClassName="active">Accounts</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/profile" activeClassName="active">Profile</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/notes" activeClassName="active">Notes</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/help" activeClassName="active">Help</Link>
					</li>
				</ul>
			</div>
		)
	}
}