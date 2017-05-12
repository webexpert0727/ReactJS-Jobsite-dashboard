import React, { Component } from 'react';
import logo from '../../../public/images/logo.png';

class Header extends Component {
  render() {
    return (
        <nav id="menu-1" className="mega-menu fa-change-black" data-color=""> 
            <section className="menu-list-items container"> 
                <ul className="menu-logo">
                    <li> <a href="index.html"> <img src={logo} alt="logo" className="img-responsive" /> </a> </li>
                </ul>
                <ul className="menu-links pull-right">
                    <li> <a href="#"> Home <i className="fa fa-angle-down fa-indicator"></i></a>
                        <ul className="drop-down-multilevel">
                            <li><a href="#">Home Style  <label className="label label-info">New</label> <i className="fa fa-angle-right fa-indicator"></i> </a> 
                            <ul className="drop-down-multilevel">
                                <li><a href="index.html"><i className="fa fa-angle-right"></i> Home Default</a></li>
                                <li><a href="index2.html"><i className="fa fa-angle-right"></i> Home Text Rotator</a></li>
                                <li><a href="index3.html"><i className="fa fa-angle-right"></i> Home Transparent</a></li>
                                <li><a href="index4.html"><i className="fa fa-angle-right"></i> Home With Slider</a></li>
                                <li><a href="index5.html"><i className="fa fa-angle-right"></i> Home 5 (Static Sections)</a></li>
                                <li><a href="index6.html"><i className="fa fa-angle-right"></i> Home Advance Search</a></li>
                                <li><a href="index7.html"><i className="fa fa-angle-right"></i> Home Map <label className="label label-info">New</label></a></li>
                                <li><a href="index8.html"><i className="fa fa-angle-right"></i> Home Search Header <label className="label label-info">New</label></a></li>
                            </ul>
                        </li>
                            <li><a href="#">Headers <i className="fa fa-angle-right fa-indicator"></i> </a> 
                                <ul className="drop-down-multilevel">
                                    <li><a href="index7.html"> <i className="fa fa-forumbee"></i> Fixed Menu </a></li>
                                    <li><a href="index.html"> <i className="fa fa-hotel"></i> Fixed Search </a></li>
                                </ul>
                            </li>
                            <li><a href="#">Breadcrumb <i className="fa fa-angle-right fa-indicator"></i> </a> 
                                <ul className="drop-down-multilevel">
                                    <li><a href="aboutus.html"> <i className="fa fa-forumbee"></i> Breadcrumb style 1</a></li>
                                    <li><a href="breadcrumb-2.html"> <i className="fa fa-hotel"></i> Breadcrumb style 2</a></li>
                                    <li><a href="breadcrumb-3.html"> <i className="fa fa-automobile"></i> Breadcrumb style 3</a></li>
                                    <li><a href="breadcrumb-4.html"> <i className="fa fa-automobile"></i> Breadcrumb style 4</a></li>
                                    <li><a href="breadcrumb-5.html"> <i className="fa fa-automobile"></i> Breadcrumb style 5</a></li>
                                    <li><a href="breadcrumb-6.html"> <i className="fa fa-automobile"></i> Breadcrumb style 6</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Footer <i className="fa fa-angle-right fa-indicator"></i> </a> 
                                <ul className="drop-down-multilevel">
                                    
                                    <li><a href="footer-normal.html"> <i className="fa fa-hotel"></i> Footer Normal</a></li>
                                    <li><a href="footer-small.html"> <i className="fa fa-automobile"></i> Footer Small</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#"> Pages <i className="fa fa-angle-down fa-indicator"></i></a> 
                        
                        <ul className="drop-down-multilevel">
                            <li><a href="users.html">Freelancers</a></li>
                            <li><a href="#">Job Detail Pages <label className="label label-info">New</label> <i className="fa fa-angle-right fa-indicator"></i> </a> 
                                <ul className="drop-down-multilevel left-side">
                                    <li><a href="single-job.html"> <i className="fa fa-forumbee"></i> Single Job Style 1</a></li>
                                    <li><a href="single-job2.html"> <i className="fa fa-hotel"></i> Single Job Style 2</a></li>
                                    <li><a href="single-job3.html"> <i className="fa fa-automobile"></i> Single Job Style 3 <label className="label label-info">New</label> </a></li>
                                </ul>
                            </li>
                            <li><a href="#">About Us <i className="fa fa-angle-right fa-indicator"></i> </a> 
                                <ul className="drop-down-multilevel left-side">
                                    <li><a href="aboutus.html"> <i className="fa fa-forumbee"></i> About Us 1</a></li>
                                    <li><a href="aboutus2.html"> <i className="fa fa-hotel"></i> About Us 2</a></li>
                                    <li><a href="aboutus3.html"> <i className="fa fa-automobile"></i> About Us 3</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Contact Us <i className="fa fa-angle-right fa-indicator"></i> </a> 
                                <ul className="drop-down-multilevel left-side">
                                    <li><a href="contactus.html"> <i className="fa fa-forumbee"></i> Contact Us 1</a></li>
                                    <li><a href="contactus2.html"> <i className="fa fa-hotel"></i> Contact Us 2</a></li>
                                    <li><a href="contactus3.html"> <i className="fa fa-automobile"></i> Contact Us 3</a></li>
                                    <li><a href="contactus4.html"> <i className="fa fa-bookmark"></i> Contact Us 4</a></li>
                                    <li><a href="contactus5.html"> <i className="fa fa-bell"></i> Contact Us 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Login pages <i className="fa fa-angle-right fa-indicator"></i> </a> 
                                <ul className="drop-down-multilevel left-side">
                                    <li><a href="login.html"> <i className="fa fa-forumbee"></i> Login Style 1</a></li>
                                    <li><a href="login-2.html"> <i className="fa fa-hotel"></i> Login Style 2</a></li>
                                    <li><a href="login-3.html"> <i className="fa fa-automobile"></i> Login Style 3</a></li>
                                    <li><a href="login-4.html"> <i className="fa fa-bookmark"></i> Login Style 4</a></li>
                                    <li><a href="login-5.html"> <i className="fa fa-bell"></i> Login Style 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Registration pages <i className="fa fa-angle-right fa-indicator"></i> </a> 
                                <ul className="drop-down-multilevel left-side">
                                    <li><a href="register.html"> <i className="fa fa-forumbee"></i> Register Style 1</a></li>
                                    <li><a href="register-2.html"> <i className="fa fa-hotel"></i> Register Style 2</a></li>
                                    <li><a href="register-3.html"> <i className="fa fa-automobile"></i> Register Style 3</a></li>
                                    <li><a href="register-4.html"> <i className="fa fa-bookmark"></i> Register Style 4</a></li>
                                    <li><a href="register-5.html"> <i className="fa fa-bell"></i> Register Style 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Coming Soon Pages <i className="fa fa-angle-right fa-indicator"></i> </a> 
                                <ul className="drop-down-multilevel left-side">
                                    <li><a href="comingsoon.html"> <i className="fa fa-forumbee"></i> Coming Soon 1</a></li>
                                    <li><a href="comingsoon2.html"> <i className="fa fa-hotel"></i> Coming Soon 2</a></li>
                                    <li><a href="comingsoon3.html"> <i className="fa fa-automobile"></i> Coming Soon 3</a></li>
                                    <li><a href="comingsoon4.html"> <i className="fa fa-bookmark"></i> Coming Soon 4</a></li>
                                    <li><a href="comingsoon5.html"> <i className="fa fa-bell"></i> Coming Soon 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Error 404 Pages<i className="fa fa-angle-right fa-indicator"></i> </a> 
                                <ul className="drop-down-multilevel left-side">
                                    <li><a href="404.html"> <i className="fa fa-forumbee"></i> 404 Style 1</a></li>
                                    <li><a href="404-2.html"> <i className="fa fa-hotel"></i> 404 Style 2</a></li>
                                    <li><a href="404-3.html"> <i className="fa fa-automobile"></i> 404 Style 3</a></li>
                                    <li><a href="404-4.html"> <i className="fa fa-bookmark"></i> 404 Style 4</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#">Mega Menu <i className="fa fa-angle-down fa-indicator"></i></a> 
                        <div className="grid-col-12 drop-down"> 
                            <div className="grid-row"> 
                                <div className="grid-col-2">
                                    <h4>Company Pages</h4>
                                    <ul>
                                        <li><a href="company-dashboard.html"> <i className="fa fa-angle-right"></i> Dashboard</a></li>
                                        <li><a href="company-dashboard-edit-profile.html"> <i className="fa fa-angle-right"></i> Edit Profile</a></li>
                                        <li><a href="company-dashboard-active-jobs.html"> <i className="fa fa-angle-right"></i> Active Jobs</a></li>
                                        <li><a href="company-dashboard-followers.html"> <i className="fa fa-angle-right"></i> Followers</a></li>
                                        <li><a href="company-dashboard-resume.html"> <i className="fa fa-angle-right"></i> Job Resume</a></li>
                                    <li><a href="elements.html"> <i className="fa fa-angle-right"></i> UI Elements <label className="label label-info">New</label></a></li>
                                    </ul>
                                </div>
                                <div className="grid-col-2">
                                    <h4>User Pages</h4>
                                    <ul>
                                    <li><a href="user-dashboard.html"> <i className="fa fa-angle-right"></i> User Dashboard</a></li>
                                    <li><a href="user-edit-profile.html"> <i className="fa fa-angle-right"></i> User Edit Profile</a></li>
                                    <li><a href="user-followed-companies.html"> <i className="fa fa-angle-right"></i> Followed Companies</a></li>
                                    <li><a href="user-job-applied.html"> <i className="fa fa-angle-right"></i> Job Applied</a></li>
                                    <li><a href="user-resume.html"> <i className="fa fa-angle-right"></i> Use Resume</a></li>
                                    <li><a href="users.html"> <i className="fa fa-angle-right"></i> All Users </a></li>
                                    <li><a href="user-resume-build.html"> <i className="fa fa-angle-right"></i> Build Resume  <label className="label label-info">New</label></a></li>
                                </ul>
                                </div>
                                <div className="grid-col-2">
                                    <h4>Blog Pages</h4>
                                    <ul>
                                        <li><a href="blog1.html"> <i className="fa fa-angle-right"></i> Grid Right sidebar</a></li>
                                        <li><a href="blog2.html"> <i className="fa fa-angle-right"></i> Blog No Sidebar</a></li>
                                        <li><a href="blog3.html"> <i className="fa fa-angle-right"></i> Blog Listing</a></li>
                                        <li><a href="blog4.html"> <i className="fa fa-angle-right"></i> Left Sidebar</a></li>
                                        <li><a href="blog5.html"> <i className="fa fa-angle-right"></i> Grid Right sidebar </a></li>
                                        <li><a href="blog-single.html"> <i className="fa fa-angle-right"></i> Single Blog 1</a></li>
                                        <li><a href="blog-single2.html"> <i className="fa fa-angle-right"></i> Single Blog 2</a></li>
                                    </ul>
                                </div>
                                <div className="grid-col-2">
                                    <h4>Job pages</h4>
                                    <ul>
                                        <li><a href="job-category1.html"> <i className="fa fa-angle-right"></i> Job Listing 1</a></li>
                                        <li><a href="job-category2.html"> <i className="fa fa-angle-right"></i> Job Listing 2</a></li>
                                        <li><a href="post-job.html"> <i className="fa fa-angle-right"></i> Job Post 1</a></li>
                                        <li><a href="post-job2.html"> <i className="fa fa-angle-right"></i> Job Post 2</a></li>
                                        <li><a href="post-job3.html"> <i className="fa fa-angle-right"></i> Job Post 3 </a></li>
                                        <li><a href="post-job-wizard.html"> <i className="fa fa-angle-right"></i> Job Post Wizard</a></li>
                                    </ul>
                                </div>
                                <div className="grid-col-2">
                                    <h4>Resume Pages</h4>
                                    <ul>
                                    <li><a href="resume.html"> <i className="fa fa-angle-right"></i> Resume Style 1</a></li>
                                    <li><a href="resume2.html"> <i className="fa fa-angle-right"></i> Resume Style 2</a></li>
                                    <li><a href="resume3.html"> <i className="fa fa-angle-right"></i> Resume Style 3</a></li>
                                    <li><a href="resume4.html"> <i className="fa fa-angle-right"></i> Resume Style 4</a></li>
                                    <li><a href="resume5.html"> <i className="fa fa-angle-right"></i> Resume Style 5 </a></li>
                                    <li><a href="resume6.html"> <i className="fa fa-angle-right"></i> Resume Style 6</a></li>
                                    <li><a href="resume7.html"> <i className="fa fa-angle-right"></i> Resume Style 7 <label className="label label-info">New</label></a></li>
                                </ul>
                                </div>
                                <div className="grid-col-2">
                                    <h4>Other pages</h4>
                                    <ul>
                                        <li><a href="single-job.html"> <i className="fa fa-angle-right"></i> Single Job 1</a></li>
                                        <li><a href="single-job2.html"> <i className="fa fa-angle-right"></i> Single job 2</a></li>
                                        <li><a href="single-job3.html"> <i className="fa fa-angle-right"></i> Single job 3 <label className="label label-info">New</label></a></li>
                                        <li><a href="pricing.html"> <i className="fa fa-angle-right"></i> Pricing Tables</a></li>
                                        <li><a href="faq.html"> <i className="fa fa-angle-right"></i> FAQ&apos;s</a></li>
                                        <li><a href="all-categories.html"> <i className="fa fa-angle-right"></i> All Categories</a></li>
                                        <li><a href="all-company.html"> <i className="fa fa-angle-right"></i> All Companies</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="no-bg"><a href="" className="p-job"><i className="fa fa-plus-square"></i> Post a Job</a></li>
                    <li className="profile-pic">
                        <a href="#"> <img src="images/admin.jpg" alt="user-img" className="img-circle" width="36" /><span className="hidden-xs hidden-sm">Arslan </span><i className="fa fa-angle-down fa-indicator"></i> </a>
                        <ul className="drop-down-multilevel left-side">
                            <li><a href="#"><i className="fa fa-user"></i> My Profile</a></li>
                            <li><a href="#"><i className="fa fa-mail-forward"></i> Inbox</a></li>
                            <li><a href="#"><i className="fa fa-gear"></i> Account Setting</a></li>
                            <li><a href="#"><i className="fa fa-power-off"></i> Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </section>
        </nav>
    );
  }
  
}


export default Header;