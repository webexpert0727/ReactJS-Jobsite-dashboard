import React, { Component } from 'react';

class EmployerLeftSide extends Component {
   
	render() {
		return (
			<div className="col-md-4 col-sm-4 col-xs-12">
                <div className="panel">
                    <div className="dashboard-logo-sidebar">
                        <img className="img-responsive center-block" src="images/company/logo1.jpg" alt="Logo" />
                    </div>
                    <div className="text-center dashboard-logo-sidebar-title">
                        <h4>Your Company Agency Pvt. Ltd </h4>
                    </div>
                </div>
                <div className="profile-nav">
                    <div className="panel">
                        <ul className="nav nav-pills nav-stacked">
                            <li>
                                <a href="/employer-dashboard"> <i className="fa fa-user"></i> Dashboard</a>
                            </li>
                            <li>
                                <a href="/all-candidates"> <i className="fa  fa-users"></i> All Candidate </a>
                            </li>
                            <li>
                                <a href="/edit-profile"> <i className="fa fa-edit"></i> Edit Profile</a>
                            </li>
                            <li>
                                <a href="/active-jobs"> <i className="fa  fa-list-ul"></i> Active Jobs</a>
                            </li>
                            <li>
                                <a href="/interviews-requested"> <i className="fa  fa-registered"></i> Interviews Requested </a>
                            </li>
                            <li>
                                <a href="/accepted-interviews"> <i className="fa  fa-check-square-o"></i> Accepted Interviews </a>
                            </li>
                            <li>
                                <a href="/matches"> <i className="fa  fa-bookmark-o"></i> Matches </a>
                            </li>
                            <li>
                                <a href="/candidates-placed"> <i className="fa  fa-users"></i> Candidates Placed </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
		);
	}
}

export default EmployerLeftSide;