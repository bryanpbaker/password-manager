import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import activeComponent from 'react-router-active-component';

import Header from './components/header.component';
import Sidebar from './components/sidebar.component';
import Home from './components/home.component';
import Login from './components/login.component';
import Register from './components/register.component';
import AccountsPage from './components/accounts-page.component';
import AccountDetail from './components/account-detail.component';


import '../style/main.scss';

const App = (props) => {

    return(
        <div className="app">
            <Header/>
            <div className="container-fluid">
                <Sidebar></Sidebar>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="login" component={Login}></Route>
            <Route path="register" component={Register}></Route>
            <Route path="accounts" component={AccountsPage}></Route>
            <Route path=":accountID" component={AccountDetail}></Route>
        </Route>
    </Router>
, document.querySelector('.main'));
