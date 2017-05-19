import React, { Component } from 'react';
import { Route, Router, browserHistory } from 'react-router';
import './App.css';
import Company from './components/Company';
import Login from './components/Login';
import Register from './components/Register';
import EditProfile from './components/EditProfile';
import ActiveJobs from './components/ActiveJobs';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      	<Router history={browserHistory}>
            <Route path={"/"} component={Login} />
	        <Route path={"login"} component={Login} />
	        <Route path={"register"} component={Register} />
            <Route path={"users"} component={Users} />
            <Route path={"all-candidates"} component={Users} />
            <Route path={"matches"} component={Users} />
            <Route path={"candidates-placed"} component={Users} />
	        <Route path={"employee-dashboard"} component={Company} />
            <Route path={"edit-profile"} component={EditProfile} />
            <Route path={"active-jobs"} component={ActiveJobs} />
            <Route path={"interviews-requested"} component={ActiveJobs} />
            <Route path={"accepted-interviews"} component={ActiveJobs} />
      	</Router>
    )
  }
}

export default App;
