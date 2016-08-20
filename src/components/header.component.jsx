import React from 'react';
import {Link} from 'react-router';

const Header = () => {

    return(
        <div className="header">
            <nav className="navbar navbar-dark bg-primary">
			  <Link className="navbar-brand" to="/">Password Manager</Link>
			  <ul className="nav navbar-nav">
			    <li className="nav-item">
			      <Link className="nav-link" to="/login" activeClassName="active">Login <span className="sr-only">(current)</span></Link>
			    </li>
			  </ul>
			</nav>
        </div>
    )
}

export default Header;
