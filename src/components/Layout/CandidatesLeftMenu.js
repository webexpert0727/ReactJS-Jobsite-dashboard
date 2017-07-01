import React, { Component } from 'react';

class CandidatesLeftMenu extends Component {

   
	render() {
		return (
            <div className="col-md-4 col-sm-4 col-xs-12">
    			 <div className="profile-card">
                    <div className="banner">
                        <img src="images/building.jpg" alt="" className="img-responsive" />
                    </div>
                    <div className="user-image">
                        <img src="images/users/profile-avatar.jpg" className="img-responsive img-circle" alt="" />
                    </div>
                    <div className="card-body">
                        <h3>Mrs. Emilly Copper</h3>
                        <span className="title">A web Designer</span>
                    </div>
                    <ul className="social-network social-circle onwhite">
                        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#" className="icoLinkedin" title="Linkedin +"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div className="profile-nav">
                    <div className="panel">
                        <ul className="nav nav-pills nav-stacked">
                            <li>
                                <a href="/candidates-dashboard"> <i className="fa fa-user"></i> Dashboard</a>
                            </li>
                            <li>
                                <a href="/candidates-edit-profile"> <i className="fa fa-edit"></i> Edit Profile</a>
                            </li>
                            <li>
                                <a href="/candidates-interview-requests"> <i className="fa fa-file-o"></i>Interview Requests </a>
                            </li>
                            <li>
                                <a href="/candidates-accepted-interviews"> <i className="fa fa-file-o"></i>Accepted Interviews </a>
                            </li>
                            <li>
                                <a href="/candidates-talent-partner"> <i className="fa  fa-list-ul"></i> Talent Partner</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>          
		);
	}
}

export default CandidatesLeftMenu;