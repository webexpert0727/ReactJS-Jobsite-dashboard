import React, { Component } from 'react';
import Layout from './Layout';
class UserDashboard extends Component {
	render() {
		return (
			<Layout>
				<section className="dashboard parallex">
		            <div className="container-fluid">
		                <div className="row">
		                    <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                        <div className="dashboard-header">
		                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                <div className="user-avatar "><a>
		                                    <img src="images/users/12.jpg" alt="" className="img-responsive center-block " /></a>
		                                    <h3>Arslan Tariq</h3>
		                                </div>
		                            </div>
		                            <div className="col-md-3 col-sm-3 col-xs-12">
		                                <div className="rad-info-box rad-txt-success">
		                                    <i className="icon icon-presentation"></i>
		                                    <span className="title-dashboard">Followings</span>
		                                    <span className="value"><span>250K</span></span>
		                                </div>
		                            </div>
		                            <div className="col-md-3 col-sm-3 col-xs-12">
		                                <div className="rad-info-box rad-txt-success">
		                                    <i className="icon icon-aperture"></i>
		                                    <span className="title-dashboard">Jobs Applied</span>
		                                    <span className="value"><span>200</span></span>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
		        <section className="dashboard-body">
		            <div className="container">
		                <div className="row">
		                    <div className="col-md-12 col-sm-12 col-xs-12">
		                        <div className="col-md-4 col-sm-4 col-xs-12">
		                            <div className="profile-nav">
		                                <div className="panel">
		                                    <ul className="nav nav-pills nav-stacked">
		                                        <li className="active">
		                                            <a href="user-dashboard.html"> <i className="fa fa-user"></i> Profile</a>
		                                        </li>
		                                        <li>
		                                            <a href="user-edit-profile.html"> <i className="fa fa-edit"></i> Edit Profile</a>
		                                        </li>
		                                        <li>
		                                            <a href="user-resume-build.html"> <i className="fa fa-file-o"></i>Build Resume </a>
		                                        </li>
		                                        <li>
		                                            <a href="user-resume.html"> <i className="fa fa-file-o"></i>Saved Resume </a>
		                                        </li>
		                                        <li>
		                                            <a href="user-job-applied.html"> <i className="fa  fa-list-ul"></i> Jobs Applied</a>
		                                        </li>
		                                        <li>
		                                            <a href="user-followed-companies.html"> <i className="fa  fa-bookmark-o"></i> Followed Companies </a>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="col-md-8 col-sm-8 col-xs-12">
		                            <div className="job-short-detail">
		                                <div className="heading-inner">
		                                    <p className="title">Profile detail</p>
		                                </div>
		                                <dl>
		                                    <dt>First Name:</dt>
		                                    <dd>Arslan Chaudhary</dd>

		                                    <dt>Father Name:</dt>
		                                    <dd> Ch Tariq Ayoub </dd>

		                                    <dt>Date Of Birth:</dt>
		                                    <dd> 15 Feb,2015 </dd>

		                                    <dt>Phone:</dt>
		                                    <dd>+99 333 1234567 </dd>

		                                    <dt>Email:</dt>
		                                    <dd>martine-aug234@domain.com </dd>

		                                    <dt>Last Education:</dt>
		                                    <dd>Phd in Information Technology</dd>

		                                    <dt>Address:</dt>
		                                    <dd>234 Uptown new City Tower </dd>

		                                    <dt>City:</dt>
		                                    <dd>Islamabad, Rawalindi</dd>

		                                    <dt>Provience:</dt>
		                                    <dd>North Vega </dd>

		                                    <dt>Country:</dt>
		                                    <dd>Somewere at Antarctica </dd>
		                                </dl>
		                            </div>

		                            <div className="heading-inner">
		                                <p className="title">Some Line About Me</p>
		                            </div>
		                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet. </p>

		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
		        <div className="brand-logo-area clients-bg">
		            <div className="clients-list light-blue">
		                <div className="client-logo">
		                    <a href="#"><img src="images/clients/client_1.png" className="img-responsive" alt="Brand" /></a>
		                </div>
		                <div className="client-logo">
		                    <a href="#"><img src="images/clients/client_2.png" className="img-responsive" alt="Brand" /></a>
		                </div>
		                <div className="client-logo">
		                    <a href="#"><img src="images/clients/client_3.png" className="img-responsive" alt="Brand" /></a>
		                </div>
		                <div className="client-logo">
		                    <a href="#"><img src="images/clients/client_4.png" className="img-responsive" alt="Brand" /></a>
		                </div>
		                <div className="client-logo">
		                    <a href="#"><img src="images/clients/client_1.png" className="img-responsive" alt="Brand" /></a>
		                </div>
		                <div className="client-logo">
		                    <a href="#"><img src="images/clients/client_2.png" className="img-responsive" alt="Brand" /></a>
		                </div>
		                <div className="client-logo">
		                    <a href="#"><img src="images/clients/client_3.png" className="img-responsive" alt="Brand" /></a>
		                </div>
		                <div className="client-logo">
		                    <a href="#"><img src="images/clients/client_4.png" className="img-responsive" alt="Brand" /></a>
		                </div>
		            </div>
		        </div>
			</Layout>
		);
	}
}

export default UserDashboard;