import React from 'react';
import { Link } from 'react-router';

import Account from './account.component';

const AccountList = (props) => {

	const accountItems = props.accounts.map((account) => {
		return(
			<Account 
				accountName={account.name} 
				key={account.name} 
			/>
		);
	});

	return(
		<div className="account-list">
			<ul className="list-group">
				{ accountItems }
			</ul>
		</div>
	)
}

export default AccountList;