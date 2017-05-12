import React, { Component } from 'react';
import { Route, Router, browserHistory } from 'react-router';
import './App.css';
import Company from './components/Company';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      	<Router history={browserHistory}>
            <Route path={"/"} component={Login} />
	        <Route path={"login"} component={Login} />
	        <Route path={"register"} component={Register} />
	        <Route path={"employee-dashboard"} component={Company} />
      	</Router>
    )
  }
}

export default App;
