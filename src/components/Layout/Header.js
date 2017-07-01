import React, { Component } from 'react';
import logo from '../../../public/images/logo.png';

class Header extends Component {
  render() {
    return (
        <nav id="menu-1" className="mega-menu fa-change-black" data-color=""> 
            <section className="menu-list-items container"> 
                <ul className="menu-logo">
                    <li><a href="#"><img src={logo} alt="logo" className="img-responsive" /></a></li>
                </ul>
                <ul className="menu-links pull-right">
                    <li><a href="#"> Home </a></li>
                    <li><a href=""> Company <i className="fa fa-angle-down fa-indicator"></i></a>
                        <ul className="drop-down-multilevel">
                            <li><a href="/employer-dashboard">Dashboard</a></li>
                            <li><a href="/all-candidates">All Candidates</a></li>
                            <li><a href="/matches">Matches</a></li>
                            <li><a href="/active-jobs">Active Jobs</a></li>
                            <li><a href="/interviews-requested">Interviews Requested</a></li>
                            <li><a href="/accepted-interviews">Accepted Interviews</a></li>
                            <li><a href="/edit-profile">Edit Profile</a></li>
                            <li><a href="/candidates-placed">Candidates Placed</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Candidates<i className="fa fa-angle-down fa-indicator"></i></a> 
                        <ul className="drop-down-multilevel">
                            <li><a href="/candidates-dashboard">Dashboard</a></li>
                            <li><a href="/candidates-edit-profile">Edit Profile</a></li>
                            <li><a href="/candidates-interview-requests">Interview Requests</a></li>
                            <li><a href="/candidates-accepted-interviews">Accepted Interviews</a></li>
                            <li><a href="/candidates-talent-partner">Talent Partner</a></li>
                        </ul>
                    </li>
                    <li className="no-bg"><a href="" className="p-job"><i className="fa fa-plus-square"></i> Post a Job</a></li>
                    <li className="profile-pic">
                        <a href="#"> <img src="images/admin.jpg" alt="user-img" className="img-circle" width="36" /><span className="hidden-xs hidden-sm">Arslan </span><i className="fa fa-angle-down fa-indicator"></i> </a>
                        <ul className="drop-down-multilevel left-side">
                            <li><a href="#"><i className="fa fa-user"></i> My Profile</a></li>
                            <li><a href="#"><i className="fa fa-mail-forward"></i> Inbox</a></li>
                            <li><a href="#"><i className="fa fa-gear"></i> Account Setting</a></li>
                            <li><a href="/login"><i className="fa fa-power-off"></i> Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </section>
        </nav>
    );
  }
  
}


export default Header;