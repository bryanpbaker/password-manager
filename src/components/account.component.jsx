import React from 'react';
import { Link } from 'react-router';

const Account = ({accountName}) => {
	const accountLink = accountName.toLowerCase();
	const accountLinkParams = accountLink + '?name=' + accountName;

	return(
		<li className="list-group-item">
			<Link to={ accountLink + '?name=' + accountName}>
				{accountName}
			</Link>
		</li>
	)
}

export default Account;