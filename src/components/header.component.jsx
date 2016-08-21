import React from 'react';
import {Link} from 'react-router';

const Header = () => {

    return(
        <div className="header">
            <nav className="navbar navbar-dark bg-primary">
			  <Link className="navbar-brand" to="/">Password Manager</Link>
			</nav>
        </div>
    )
}

export default Header;
