import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import activeComponent from 'react-router-active-component';

import Header from './components/header.component';
import Home from './components/home.component';
import Login from './components/login.component';
import Register from './components/register.component';

import '../style/main.scss';

const App = (props) => {

    return(
        <div className="app">
            <Header/>
            {props.children}
        </div>
    )
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="login" component={Login}></Route>
            <Route path="register" component={Register}></Route>
        </Route>
    </Router>
, document.querySelector('.container'));
