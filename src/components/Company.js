import React, { Component } from 'react';
import Layout from './Layout/Layout';

class Company extends Component {
  render() {
    return (
        <Layout>
            <div className="clearfix"></div>

			<div className="clearfix"></div>
	        <div className="search">
	            <div className="container-fluid">
	                <div className="row">
	                    <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
	                        <div className="input-group">
	                            <div className="input-group-btn search-panel">
	                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
	                                    <span id="search_concept">Filter By</span> <span className="caret"></span>
	                                </button>
	                                <ul className="dropdown-menu" role="menu">
	                                    <li><a href="#">By Company</a></li>
	                                    <li><a href="#">By Function</a></li>
	                                    <li><a href="#">By City </a></li>
	                                    <li><a href="#">By Salary </a></li>
	                                    <li><a href="#">By Industry</a></li>
	                                </ul>
	                            </div>
	                            <input type="hidden" name="search_param" value="all" id="search_param" />
	                            <input type="text" className="form-control search-field" name="x" placeholder="Search term..." />
	                            <span className="input-group-btn">
	                        	<button className="btn btn-default" type="button"><span className="fa fa-search"></span></button>
	                            </span>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <section className="company-dashboard">
	            <div className="container">
	                <div className="row">
	                    <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
	                        <div className="dashboard-header">
	                            <div className="col-md-6 col-sm-6 col-xs-12">
	                                <div className="dashboard-header-logo-box">
	                                    <div className="company-logo">
	                                        <a><img src="images/company/s1.png" alt="" className="img-responsive center-block " /></a>
	                                    </div>
	                                    <h3>Confidential Agency Pvt. Ltd</h3>
	                                    <p>2nd Downtown street, hellon city, vatnaam</p>
	                                    <ul className="social-links list-inline">
	                                        <li> <a href="#"><i className="icon-facebook"></i></a></li>
	                                        <li> <a href="#"><i className="icon-twitter"></i></a></li>
	                                        <li> <a href="#"><i className="icon-googleplus"></i></a></li>
	                                        <li> <a href="#"><i className="icon-linkedin"></i></a></li>
	                                    </ul>
	                                </div>
	                            </div>
	                            <div className="col-md-3 col-sm-3 col-xs-12">
	                                <div className="rad-info-box">
	                                    <i className="icon icon-profile-male"></i>
	                                    <span className="title-dashboard">Followers</span>
	                                    <span className="value"><span>450M</span></span>
	                                </div>
	                                <div className="rad-info-box">
	                                    <i className="icon icon-presentation"></i>
	                                    <span className="title-dashboard">Jobs Posted</span>
	                                    <span className="value"><span>2500</span></span>
	                                </div>
	                            </div>
	                            <div className="col-md-3 col-sm-3 col-xs-12">
	                                <div className="rad-info-box">
	                                    <i className="icon icon-documents"></i>
	                                    <span className="title-dashboard">New resume</span>
	                                    <span className="value"><span>200</span></span>
	                                </div>
	                                <div className="rad-info-box rad-txt-success">
	                                    <i className="icon icon-briefcase"></i>
	                                    <span className="title-dashboard">Hired</span>
	                                    <span className="value"><span>6500</span></span>
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
	                                            <a href="company-dashboard.html"> <i className="fa fa-user"></i> Dashboard</a>
	                                        </li>
	                                        <li>
	                                            <a href="company-dashboard-edit-profile.html"> <i className="fa fa-edit"></i> Edit Profile</a>
	                                        </li>
	                                        <li>
	                                            <a href="company-dashboard-resume.html"> <i className="fa fa-file-o"></i>Resume </a>
	                                        </li>
	                                        <li>
	                                            <a href="company-dashboard-active-jobs.html"> <i className="fa  fa-list-ul"></i> Active Jobs</a>
	                                        </li>
	                                        <li>
	                                            <a href="company-dashboard-featured-jobs.html"> <i className="fa  fa-list-alt"></i> Featured Jobs</a>
	                                        </li>
	                                        <li>
	                                            <a href="company-dashboard-followers.html"> <i className="fa  fa-bookmark-o"></i> Followers </a>
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
	                                    <dt>Industry:</dt>
	                                    <dd> Designing</dd>

	                                    <dt>Type of Business:</dt>
	                                    <dd> Single Proprietorship </dd>

	                                    <dt>Established In:</dt>
	                                    <dd> 15 Feb,2015 </dd>

	                                    <dt>Phone:</dt>
	                                    <dd>+99 333 1234567 </dd>

	                                    <dt>Email:</dt>
	                                    <dd>martine-aug234@domain.com </dd>

	                                    <dt>No. of Employees:</dt>
	                                    <dd>55</dd>

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
	                                <p className="title">Some Line About Our Company</p>
	                            </div>
	                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet. </p>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </section>
        </Layout>
    );
  }
}

export default Company;