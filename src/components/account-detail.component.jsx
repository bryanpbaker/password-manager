import React from 'react';

const AccountDetail = (props) => {
	const accountName = (props.location.query.name);

	return(
		<div>
			<h1>
				Your {accountName} Account!
			</h1>
		</div>
	)
}

export default AccountDetail;