import React, { Component } from 'react';

import AccountList from './account-list.component';

export default class AccountsPage extends Component {
	constructor() {
		super();

		this.state = {
			accounts: [
				{
					name: 'Facebook'
				},
				{
					name: 'Twitter'
				},
				{
					name: 'Capital One'
				},
				{
					name: 'AT&T'
				},
				{
					name: 'GM Financial'
				},
				{
					name: 'Santander'
				}
			]
		}
	}

	render() {
		return(
			<div className="accounts-page">
				<h1>Your Accounts</h1>
				<AccountList accounts={this.state.accounts}></AccountList>
			</div>
		)
	}
}