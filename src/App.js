import React, { Component } from 'react';
import { Route, Router, browserHistory } from 'react-router';
import './App.css';
import Home from './components/Home';
import User from './components/User';
import Login from './components/Login';
import Register from './components/Register';
// import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      	<Router history={browserHistory}>
	        <Route path={"/"} component={Home} />
	        <Route path={"login"} component={Login} />
	        <Route path={"register"} component={Register} />
	        <Route path={"home"} component={Home} />
	        <Route path={"user"} component={User} />
      	</Router>
    )
  }
}

export default App;
