import React, { Component } from 'react';
import { Route, Router, browserHistory } from 'react-router';
import './App.css';
import Company from './components/Company';
import Login from './components/Login';
import Register from './components/Register';
import EditProfile from './components/EditProfile';
import ActiveJobs from './components/ActiveJobs';
import Users from './components/Users';

import Candidates from './components/Candidates';
import CandidatesEditProfile from './components/CandidatesEditProfile';
import CandidatesInterviewRequests from './components/CandidatesInterviewRequests';
import CandidatesAcceptedInterviews from './components/CandidatesAcceptedInterviews';
import CandidatesTalentPartner from './components/CandidatesTalentPartner';

class App extends Component {
  render() {
    return (
      	<Router history={browserHistory}>
          <Route path={"/"} component={Login} />
          <Route path={"/login"} component={Login} />
          <Route path={"/register"} component={Register} />
          <Route path={"/users"} component={Users} />
          <Route path={"/all-candidates"} component={Users} />
          <Route path={"/matches"} component={Users} />
          <Route path={"/candidates-placed"} component={Users} />
          <Route path={"/employer-dashboard"} component={Company} />
          <Route path={"/edit-profile"} component={EditProfile} />
          <Route path={"/active-jobs"} component={ActiveJobs} />
          <Route path={"/interviews-requested"} component={ActiveJobs} />
          <Route path={"/accepted-interviews"} component={ActiveJobs} />
          <Route path={"/candidates-dashboard"} component={Candidates} />
          <Route path={"/candidates-edit-profile"} component={CandidatesEditProfile} />
          <Route path={"/candidates-interview-requests"} component={CandidatesInterviewRequests} />
          <Route path={"/candidates-accepted-interviews"} component={CandidatesAcceptedInterviews} />
          <Route path={"/candidates-talent-partner"} component={CandidatesTalentPartner} />
      	</Router>
    )
  }
}

export default App;
