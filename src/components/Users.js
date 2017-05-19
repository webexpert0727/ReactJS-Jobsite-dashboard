import React, { Component } from 'react';
import Layout from './Layout/Layout';

class Users extends Component {
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
		        <section className="breadcrumb-search parallex">
		            <div className="container-fluid">
		                <div className="row">
		                    <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                        <div className="col-md-8 col-sm-12 col-md-offset-2 col-xs-12 nopadding">
		                            <div className="search-form-contaner">
		                                <form className="form-inline">
		                                    <div className="col-md-7 col-sm-7 col-xs-12 nopadding">
		                                        <div className="form-group">
		                                            <input type="text" className="form-control" name="keyword" placeholder="Search Keyword" value="" />
		                                            <i className="icon-magnifying-glass"></i>
		                                        </div>
		                                    </div>
		                                    <div className="col-md-3 col-sm-3 col-xs-12 nopadding">
		                                        <div className="form-group">
		                                            <select className="select-category form-control">
		                                                <option label="Select Option"></option>
		                                                <option value="0">Customer Service</option>
		                                                <option value="1">Designer</option>
		                                                <option value="2">Developer</option>
		                                                <option value="3">Finance</option>
		                                                <option value="4">Human Resource</option>
		                                                <option value="5">Information Technology</option>
		                                                <option value="6">Marketing</option>
		                                                <option value="7">Others</option>
		                                                <option value="8">Sales</option>
		                                            </select>
		                                        </div>
		                                    </div>
		                                    <div className="col-md-2 col-sm-2 col-xs-12 nopadding">
		                                        <div className="form-group form-action">
		                                            <button type="button" className="btn btn-default btn-search-submit">Search <i className="fa fa-angle-right"></i> </button>
		                                        </div>
		                                    </div>
		                                </form>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
		        <section className="categories-list-page light-grey">
		            <div className="container">
		                <div className="row">
		                    <div className="col-md-12 col-sm-12 col-xs-12 nopadding">

		                        <div className="col-md-8 col-sm-12 col-xs-12">
		                        	<div className="profile-content">
		                                <div className="card">
		                                    <div className="firstinfo">
		                                    	<img src="images/users/12.jpg" alt="" className="img-circle img-responsive" />
		                                        <div className="profileinfo">
		                                            <h1> <a href=""> Muhammad Jawad </a></h1>
		                                            <h3>CEO Ninja</h3>
		                                            <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
		                                            <div className="profile-skills">
		                                            	<span> wordpress </span> <span> css3 </span> <span> javascript </span> <span> php </span> <span> laravel </span> <span> woocommerce </span>
		                                            </div>
		                                            <div className="hire-btn">
		                                            	<a href="" className="btn-default" > <i className="fa fa-location-arrow"></i> Hire Me</a>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="profile-content">
		                                <div className="card">
		                                    <div className="firstinfo">
		                                    	<img src="images/users/12.jpg" alt="" className="img-circle img-responsive" />
		                                        <div className="profileinfo">
		                                            <h1> <a href=""> Arslan Tariq </a></h1>
		                                            <h3>Designer and Developer</h3>
		                                            <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
		                                            <div className="profile-skills">
		                                            	<span> photoshop </span> <span> coral draw </span> <span> javascript </span> <span> htm5 </span> <span> css3 </span> 
		                                            </div>
		                                            <div className="hire-btn">
		                                            	<a href="" className="btn-default" > <i className="fa fa-location-arrow"></i> Hire Me</a>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="profile-content">
		                                <div className="card">
		                                    <div className="firstinfo">
		                                    	<img src="images/users/13.jpg" alt="" className="img-circle img-responsive" />
		                                        <div className="profileinfo">
		                                            <h1> <a href=""> Humayun Sarfraz </a></h1>
		                                            <h3>PHP Ninja</h3>
		                                            <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
		                                            <div className="profile-skills">
		                                            	<span> wordpress </span> <span> plugin </span> <span> javascript </span> <span> php </span> <span> laravel </span> 
		                                            </div>
		                                            <div className="hire-btn">
		                                            	<a href="" className="btn-default" > <i className="fa fa-location-arrow"></i> Hire Me</a>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="profile-content">
		                                <div className="card">
		                                    <div className="firstinfo">
		                                    	<img src="images/users/12.jpg" alt="" className="img-circle img-responsive" />
		                                        <div className="profileinfo">
		                                            <h1> <a href=""> Muhammad Umair </a></h1>
		                                            <h3>Laravel Ninja</h3>
		                                            <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
		                                            <div className="profile-skills">
		                                            	<span> laravel </span> <span> css </span> <span> javascript </span> <span> php </span> <span> wordpress </span> 
		                                            </div>
		                                            <div className="hire-btn">
		                                            	<a href="" className="btn-default" > <i className="fa fa-location-arrow"></i> Hire Me</a>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="profile-content">
		                                <div className="card">
		                                    <div className="firstinfo">
		                                    	<img src="images/users/14.jpg" alt="" className="img-circle img-responsive" />
		                                        <div className="profileinfo">
		                                            <h1> <a href=""> Emily Copper </a></h1>
		                                            <h3>Laravel Ninja</h3>
		                                            <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
		                                            <div className="profile-skills">
		                                            	<span> html5 </span> <span> css3 </span> <span> javascript </span> <span> php </span> <span> laravel </span> 
		                                            </div>
		                                            <div className="hire-btn">
		                                            	<a href="" className="btn-default" > <i className="fa fa-location-arrow"></i> Hire Me</a>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        	<div className="profile-content">
		                                <div className="card">
		                                    <div className="firstinfo">
		                                    	<img src="images/users/12.jpg" alt="" className="img-circle img-responsive" />
		                                        <div className="profileinfo">
		                                            <h1> <a href=""> Muhammad Jawad </a></h1>
		                                            <h3>CEO Ninja</h3>
		                                            <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
		                                            <div className="profile-skills">
		                                            	<span> wordpress </span> <span> css3 </span> <span> javascript </span> <span> php </span> <span> laravel </span> <span> woocommerce </span>
		                                            </div>
		                                            <div className="hire-btn">
		                                            	<a href="" className="btn-default" > <i className="fa fa-location-arrow"></i> Hire Me</a>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="profile-content">
		                                <div className="card">
		                                    <div className="firstinfo">
		                                    	<img src="images/users/12.jpg" alt="" className="img-circle img-responsive" />
		                                        <div className="profileinfo">
		                                            <h1> <a href=""> Arslan Tariq </a></h1>
		                                            <h3>Designer and Developer</h3>
		                                            <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
		                                            <div className="profile-skills">
		                                            	<span> photoshop </span> <span> coral draw </span> <span> javascript </span> <span> htm5 </span> <span> css3 </span> 
		                                            </div>
		                                            <div className="hire-btn">
		                                            	<a href="" className="btn-default" > <i className="fa fa-location-arrow"></i> Hire Me</a>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="profile-content">
		                                <div className="card">
		                                    <div className="firstinfo">
		                                    	<img src="images/users/13.jpg" alt="" className="img-circle img-responsive" />
		                                        <div className="profileinfo">
		                                            <h1> <a href=""> Humayun Sarfraz </a></h1>
		                                            <h3>PHP Ninja</h3>
		                                            <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
		                                            <div className="profile-skills">
		                                            	<span> wordpress </span> <span> plugin </span> <span> javascript </span> <span> php </span> <span> laravel </span> 
		                                            </div>
		                                            <div className="hire-btn">
		                                            	<a href="" className="btn-default" > <i className="fa fa-location-arrow"></i> Hire Me</a>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="profile-content">
		                                <div className="card">
		                                    <div className="firstinfo">
		                                    	<img src="images/users/12.jpg" alt="" className="img-circle img-responsive" />
		                                        <div className="profileinfo">
		                                            <h1> <a href=""> Muhammad Umair </a></h1>
		                                            <h3>Laravel Ninja</h3>
		                                            <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
		                                            <div className="profile-skills">
		                                            	<span> laravel </span> <span> css </span> <span> javascript </span> <span> php </span> <span> wordpress </span> 
		                                            </div>
		                                            <div className="hire-btn">
		                                            	<a href="" className="btn-default" > <i className="fa fa-location-arrow"></i> Hire Me</a>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="profile-content">
		                                <div className="card">
		                                    <div className="firstinfo">
		                                    	<img src="images/users/14.jpg" alt="" className="img-circle img-responsive" />
		                                        <div className="profileinfo">
		                                            <h1> <a href=""> Emily Copper </a></h1>
		                                            <h3>Laravel Ninja</h3>
		                                            <p className="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
		                                            <div className="profile-skills">
		                                            	<span> html5 </span> <span> css3 </span> <span> javascript </span> <span> php </span> <span> laravel </span> 
		                                            </div>
		                                            <div className="hire-btn">
		                                            	<a href="" className="btn-default" > <i className="fa fa-location-arrow"></i> Hire Me</a>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="col-md-4 col-sm-12 col-xs-12">
		                            <aside>
		                                <div className="widget">
		                                    <div className="widget-heading"><span className="title">Hot Categories</span></div>
		                                    <ul className="categories-module">
		                                        <li> <a href="">Location<span></span> </a> </li>
		                                        <li> <a href=""> Years Experience <span></span> </a> </li>
		                                        <li> <a href=""> Salary Requirements<span></span> </a> </li>
		                                        <li> <a href=""> Industry Experience<span></span> </a> </li>
		                                        <li> <a href=""> Education <span></span> </a> </li>
		                                    </ul>
		                                </div>
		                                <div className="widget">
		                                    <div className="widget-heading"><span className="title">Latest Articles</span></div>
		                                    <ul className="related-post">
		                                        <li>
		                                            <a href="#">Assistant Manager Procurement </a>
		                                            <span><i className="fa fa-map-marker"></i>Managgo, WC </span>
		                                            <span><i className="fa fa-calendar"></i>March 22, 2015 </span>
		                                        </li>
		                                        <li>
		                                            <a href="#">Marketing Professionals Required</a>
		                                            <span><i className="fa fa-map-marker"></i>Homelando, New Vage </span>
		                                            <span><i className="fa fa-calendar"></i>Sep 01, 2015</span>
		                                        </li>
		                                        <li>
		                                            <a href="#">Mobile App Programmers </a>
		                                            <span><i className="fa fa-map-marker"></i>Homelando, New Vage </span>
		                                            <span><i className="fa fa-calendar"></i> - March 09, 2016 </span>
		                                        </li>
		                                        <li>
		                                            <a href="#">General Compliance Officer</a>
		                                            <span><i className="fa fa-map-marker"></i>Arlington, VA </span>
		                                            <span><i className="fa fa-calendar"></i>Feb 09, 2016</span>
		                                        </li>
		                                        <li>
		                                            <a href="#">Call Centre Manager</a>
		                                            <span><i className="fa fa-map-marker"></i>Managgo, WC  </span>
		                                            <span><i className="fa fa-calendar"></i> March 09, 2016</span>
		                                        </li>
		                                        <li>
		                                            <a href="#">Assistant Manager Audit</a>
		                                            <span><i className="fa fa-map-marker"></i>Heling, WC </span>
		                                            <span><i className="fa fa-calendar"></i>Aug 01, 2015 - </span>
		                                        </li>
		                                        <li>
		                                            <a href="#">Telesales Agent (UK Dialing)</a>
		                                            <span><i className="fa fa-map-marker"></i>Somro, New </span>
		                                            <span><i className="fa fa-calendar"></i>Sep 01, 2015</span>
		                                        </li>
		                                        <li>
		                                            <a href="#">Assistant Brand Manager</a>
		                                            <span><i className="fa fa-map-marker"></i>Heritage, VA </span>
		                                            <span><i className="fa fa-calendar"></i>May 09, 2016</span>
		                                        </li>
		                                    </ul>
		                                </div>

		                            </aside>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
			</Layout>
		)
	}
}

export default Users;