import React, { Component } from 'react';
import { Route, Router, browserHistory } from 'react-router';
import './App.css';
import Home from './components/Home';
import Company from './components/Company';
import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      	<Router history={browserHistory}>
	        <Route path={"/"} component={Home} />
	        <Route path={"login"} component={Login} />
	        <Route path={"register"} component={Register} />
	        <Route path={"home"} component={Home} />
	        <Route path={"employee-dashboard"} component={Company} />
            <Route path={"user-dashboard"} component={UserDashboard} />
            <Route path={"users"} component={Users} />
      	</Router>
    )
  }
}

export default App;
