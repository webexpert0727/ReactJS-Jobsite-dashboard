import React, { Component } from 'react';
import Layout from './Layout';

class Home extends Component {
  render() {
    return (
    	<Layout>
    		<div className="clearfix"></div>
            <div className="search">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
                            <div className="input-group">
                                <div className="input-group-btn search-panel">
                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"> <span id="search_concept">Filter By</span> <span className="caret"></span> </button>
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
                                </span> </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="main-section parallex">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-10 col-sm-12 col-md-offset-1 col-xs-12 nopadding">
		                    <div className="search-form-contaner">
		                        <h1 className="search-main-title"> Ten million success stories. Start yours today </h1>
		                        <form className="form-inline">
		                            <div className="col-md-4 col-sm-4 col-xs-12 nopadding">
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
		                            <div className="col-md-3 col-sm-3 col-xs-12 nopadding">
		                                <div className="form-group">
		                                    <select className="select-location form-control">
		                                        <option value="">Select location</option>
		                                        <option value="0">SriLanka</option>
		                                        <option value="1">Australia</option>
		                                        <option value="2">Bahrain</option>
		                                        <option value="3">Canada</option>
		                                        <option value="4">Denmark</option>
		                                        <option value="5">Germany</option>
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
		    </section>
		    <section className="cat-tabs cat-tab-index-2">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-12 col-sm-12 col-xs-12">
		                    <div className="col-md-12 col-sm-12 col-xs-12">
		                        <div className="cat-title">Browse Jobs</div>
		                    </div>
		                    <div className="col-md-12 col-sm-12 col-xs-12">
		                        <div className="panel panel-primary">
		                            <div className="panel-heading"> 
		                                <ul className="nav panel-tabs">
		                                    <li> <a href="#tab1" data-toggle="tab"><i className="icofont icon-ribbon"></i><span className="hidden-xs hidden-sm">By Company</span></a> </li>
		                                    <li> <a href="#tab2" data-toggle="tab"><i className="icofont icon-layers"></i><span className="hidden-xs hidden-sm">By Function</span></a> </li>
		                                    <li className="active"> <a href="#tab3" data-toggle="tab"><i className="icofont icon-global"></i><span className="hidden-xs hidden-sm">By City</span></a> </li>
		                                    <li> <a href="#tab4" data-toggle="tab"><i className="icofont icon-linegraph"></i><span className="hidden-xs hidden-sm">By Type</span></a> </li>
		                                    <li> <a href="#tab5" data-toggle="tab"><i className="icofont icon-briefcase"></i><span className="hidden-xs hidden-sm">By Industry</span></a> </li>
		                                </ul>
		                            </div>
		                        </div>
		                        <div className="panel-body">
		                            <div className="tab-content">
		                                <div className="tab-pane tab-pane animated fadeInUp" id="tab1" >
		                                    <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/1.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Technical Documentation Specialist</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. United States</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> New York </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-full-time-color"> <i className="fa fa-clock-o"></i> Full time </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/1.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Technical Network Director</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Australia</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6 ">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> Melbourne </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-part-time-color"> <i className="fa fa-clock-o"></i> Part Time </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/1.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Looking for Bootstrap designer</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Pakistan</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> Lahore </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-remote-color"> <i className="fa fa-clock-o"></i> Remote </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/1.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Assistant Engineer (IT/Networks)</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Malaysia</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> Singapore </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-intern-color"> <i className="fa fa-clock-o"></i> Internship </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="tab-pane animated fadeInDown" id="tab2">
		                                    <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/1.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Looking for Bootstrap designer</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Pakistan</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> Lahore </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-remote-color"> <i className="fa fa-clock-o"></i> Remote </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/5.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Technical Documentation Specialist</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. United States</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> New York </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-full-time-color"> <i className="fa fa-clock-o"></i> Full time </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/3.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Assistant Engineer (IT/Networks)</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Malaysia</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> Singapore </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-intern-color"> <i className="fa fa-clock-o"></i> Internship </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/4.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Technical Network Director</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Australia</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> Melbourne </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-part-time-color"> <i className="fa fa-clock-o"></i> Part Time </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="tab-pane active animated fadeInLeft" id="tab3">
		                                    <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/5.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Looking for Bootstrap designer</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Pakistan</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> New York </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-full-time-color"> <i className="fa fa-clock-o"></i> Full time </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/3.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Technical Documentation Specialist</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. United States</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> New York </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-intern-color"> <i className="fa fa-clock-o"></i> Internship </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/1.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Assistant Engineer (IT/Networks)</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Malaysia</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> New York </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-part-time-color"> <i className="fa fa-clock-o"></i> Part Time </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/3.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Technical Network Director</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Australia</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> New York </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-remote-color"> <i className="fa fa-clock-o"></i> Remote </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="tab-pane animated fadeInRight" id="tab4">
		                                    <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/5.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Technical Documentation Specialist</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. United States</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> New York </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-full-time-color"> <i className="fa fa-clock-o"></i> Full time </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/1.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Technical Network Director</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Australia</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> Melbourne </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-full-time-color"> <i className="fa fa-clock-o"></i> Full time </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/3.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Looking for Bootstrap designer</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Pakistan</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> Lahore </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-full-time-color"> <i className="fa fa-clock-o"></i> Full time </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/4.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Assistant Engineer (IT/Networks)</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Malaysia</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> Singapore </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-full-time-color"> <i className="fa fa-clock-o"></i> Full time </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="tab-pane animated fadeInUp" id="tab5">
		                                    <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/1.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Technical Network Director</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. United States</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> New York </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-full-time-color"> <i className="fa fa-clock-o"></i> Full time </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/3.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Technical Network Director (IT/Networks)</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Malaysia</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> Singapore </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-intern-color"> <i className="fa fa-clock-o"></i> Internship </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/5.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Looking for Technical Network Director</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Pakistan</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> Lahore </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-remote-color"> <i className="fa fa-clock-o"></i> Remote </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                        <div className="job-box">
		                                            <div className="col-md-1 col-sm-1 col-xs-12 nopadding  hidden-xs hidden-sm">
		                                                <div className="comp-logo"> <img src="images/company/1.png" className="img-responsive" alt="scriptsbundle" /> </div>
		                                            </div>
		                                            <div className="col-md-5 col-sm-5 col-xs-12">
		                                                <div className="job-title-box"> <a href="#">
		                                                    <div className="job-title"> Technical Network Director</div>
		                                                    </a> <a href="#"><span className="comp-name">conversi Pvt. Ltd. Australia</span></a> </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-location"> <i className="fa fa-location-arrow"></i> Melbourne </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-6">
		                                                <div className="job-type jt-part-time-color"> <i className="fa fa-clock-o"></i> Part Time </div>
		                                            </div>
		                                            <div className="col-md-2 col-sm-2 col-xs-12">
		                                                <button className="btn btn-primary btn-custom">Apply Now</button>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		    <section className="facts">
		        <div className="container">
		            <div className="row">
		                <div className="col-sm-6 col-md-3 col-xs-6">
		                    <div className="fact-box">
		                        <div className="single-facts-area">
		                            <div className="facts-icon"> <i className="icon-megaphone"></i> </div>
		                            <span className="counter">180</span>
		                            <h3>Jobs</h3>
		                        </div>
		                    </div>
		                </div>
		                <div className="col-sm-6 col-md-3 col-xs-6">
		                    <div className="fact-box">
		                        <div className="single-facts-area">
		                            <div className="facts-icon"> <i className="icon-document"></i> </div>
		                            <span className="counter">175</span>
		                            <h3> Resume </h3>
		                        </div>
		                    </div>
		                </div>
		                <div className="col-sm-6 col-md-3 col-xs-6">
		                    <div className="fact-box">
		                        <div className="single-facts-area">
		                            <div className="facts-icon"> <i className="icon-profile-male"></i> </div>
		                            <span className="counter">20</span>
		                            <h3>Members</h3>
		                        </div>
		                    </div>
		                </div>
		                <div className="col-sm-6 col-md-3 col-xs-6">
		                    <div className="fact-box">
		                        <div className="single-facts-area">
		                            <div className="facts-icon"> <i className="icon-toolbox"></i> </div>
		                            <span className="counter">2142</span>
		                            <h3>Company</h3>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		    <section className="featured-jobs">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-12 col-sm-12 col-xs-12">
		                    <div className="col-md-12 col-sm-12 col-xs-12">
		                        <div className="Heading-title black">
		                            <h1>Featured Jobs</h1>
		                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12">
		                        <div className="featured-image-box">
		                            <div className="img-box"><img src="images/company/1.png" className="img-responsive center-block" alt="" /></div>
		                            <div className="content-area">
		                                <div className="">
		                                    <h4><a href=""> Graphic Designer </a></h4>
		                                    <p> Confidential Int. Pvt. Ltd. Pakistan </p>
		                                </div>
		                                <div className="feature-post-meta"> <a href=""> <i className="fa fa-clock-o"></i> 1 days ago</a> <a href="" className="mata-detail part">Part Time</a> </div>
		                                <div className="feature-post-meta-bottom"> <span>$500<small>/ month</small></span> <a href="" className="apply pull-right" > Apply Now</a> </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12">
		                        <div className="featured-image-box">
		                            <div className="img-box"><img src="images/company/4.png" className="img-responsive center-block" alt="" /></div>
		                            <div className="content-area">
		                                <div className="">
		                                    <h4><a href=""> Software Engineer </a></h4>
		                                    <p> Confidential Int. Pvt. Ltd. Pakistan </p>
		                                </div>
		                                <div className="feature-post-meta"> <a href=""> <i className="fa fa-clock-o"></i> 5 days ago</a> <a href="" className="mata-detail remote">Remote</a> </div>
		                                <div className="feature-post-meta-bottom"> <span>$900<small>/ month</small></span> <a href="" className="apply pull-right" > Apply Now</a> </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12">
		                        <div className="featured-image-box">
		                            <div className="img-box"><img src="images/company/3.png" className="img-responsive center-block" alt="" /></div>
		                            <div className="content-area">
		                                <div className="">
		                                    <h4><a href=""> Netword Administrator </a></h4>
		                                    <p> Confidential Int. Pvt. Ltd. Pakistan </p>
		                                </div>
		                                <div className="feature-post-meta"> <a href=""> <i className="fa fa-clock-o"></i> 2 days ago</a> <a href="" className="mata-detail full-time">Full Time</a> </div>
		                                <div className="feature-post-meta-bottom"> <span>$1500<small>/ month</small></span> <a href="" className="apply pull-right" > Apply Now</a> </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12">
		                        <div className="featured-image-box">
		                            <div className="img-box"><img src="images/company/2.png" className="img-responsive center-block" alt="" /></div>
		                            <div className="content-area">
		                                <div className="">
		                                    <h4><a href=""> managing director </a></h4>
		                                    <p> Kings Int. Pvt. Ltd. Pakistan </p>
		                                </div>
		                                <div className="feature-post-meta"> <a href=""> <i className="fa fa-clock-o"></i> 2 days ago</a> <a href="" className="mata-detail full-time">full Time</a> </div>
		                                <div className="feature-post-meta-bottom"> <span>$2500<small>/ month</small></span> <a href="" className="apply pull-right" > Apply Now</a> </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12">
		                        <div className="featured-image-box">
		                            <div className="img-box"><img src="images/company/5.png" className="img-responsive center-block" alt="" /></div>
		                            <div className="content-area">
		                                <div className="">
		                                    <h4><a href=""> 54/A Ready Flat in Miami Beach </a></h4>
		                                    <p> Confidential Int. Pvt. Ltd. Pakistan </p>
		                                </div>
		                                <div className="feature-post-meta"> <a href=""> <i className="fa fa-clock-o"></i> 2 days ago</a> <a href="" className="mata-detail remote">Freelancer</a> </div>
		                                <div className="feature-post-meta-bottom"> <span>$500<small>/ month</small></span> <a href="" className="apply pull-right" > Apply Now</a> </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12">
		                        <div className="featured-image-box">
		                            <div className="img-box"><img src="images/company/3.png" className="img-responsive center-block" alt="" /></div>
		                            <div className="content-area">
		                                <div className="">
		                                    <h4><a href=""> Documentation Expert </a></h4>
		                                    <p> XCosdo Int. Pvt. Ltd. Pakistan </p>
		                                </div>
		                                <div className="feature-post-meta"> <a href=""> <i className="fa fa-clock-o"></i> 10 days ago</a> <a href="" className="mata-detail intern">Intern</a> </div>
		                                <div className="feature-post-meta-bottom"> <span>$400<small>/ month</small></span> <a href="" className="apply pull-right" > Apply Now</a> </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-12 col-sm-12 col-xs-12">
		                    	<div className="load-more-btn">
		                        	<button className="btn-default"> View All <i className="fa fa-angle-right"></i> </button>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		    <section className="pricing-section-1 pricing-white">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                	<div className="col-md-12 col-sm-12 col-xs-12">
		                        <div className="Heading-title black">
		                            <h1>Resume Pricing</h1>
		                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12">
		                        <div className="ui_box">
		                            <div className="ui_box__inner">
		                                <h2> Basic Plan </h2>
		                                <div className="features_left">
		                                    <ul>
		                                        <li> Posting </li>
		                                        <li> Searching </li>
		                                        <li> Documentation </li>
		                                        <li className="cut"> Support </li>
		                                        <li className="cut"> Access Resume </li>
		                                        <li className="cut"> Contact Details </li>
		                                        <li className="cut"> Interviews </li>
		                                        <li className="cut"> Test Preprations </li>
		                                    </ul>
		                                </div>
		                                <div className="price-rates"> Free<small>Always</small> </div>
		                                <p>Lorem ipsum dolor sit amet. Some more super groovy information.</p>
		                            </div>
		                            <div className="drop">
		                                <a href="">
		                                    <p>Select Plan</p>
		                                </a>
		                                <div className="arrow"></div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12">
		                        <div className="ui_box">
		                            <div className="ui_box__inner">
		                                <h2> Premium Plan </h2>
		                                <div className="features_left">
		                                    <ul>
		                                        <li> Posting </li>
		                                        <li> Searching </li>
		                                        <li> Documentation </li>
		                                        <li> Support </li>
		                                        <li> Access Resume </li>
		                                        <li className="cut"> Contact Details </li>
		                                        <li className="cut"> Interviews </li>
		                                        <li className="cut"> Test Preprations </li>
		                                    </ul>
		                                </div>
		                                <div className="price-rates"> $29 <small>per month</small> </div>
		                                <p>Lorem ipsum dolor sit amet. Some more super groovy information.</p>
		                            </div>
		                            <div className="drop">
		                                <a href="">
		                                    <p>Select Plan</p>
		                                </a>
		                                <div className="arrow"></div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12">
		                        <div className="ui_box">
		                            <div className="ui_box__inner">
		                                <h2> Standard Plan </h2>
		                                <div className="features_left">
		                                    <ul>
		                                        <li> Posting </li>
		                                        <li> Searching </li>
		                                        <li> Documentation </li>
		                                        <li> Support </li>
		                                        <li> Access Resume </li>
		                                        <li> Contact Details </li>
		                                        <li> Interviews </li>
		                                        <li> Test Preprations </li>
		                                    </ul>
		                                </div>
		                                <div className="price-rates"> $59 <small>per month</small> </div>
		                                <p>Lorem ipsum dolor sit amet. Some more super groovy information.</p>
		                            </div>
		                            <div className="drop">
		                                <a href="">
		                                    <p>Select Plan</p>
		                                </a>
		                                <div className="arrow"></div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12 visible-sm">
		                        <div className="ui_box">
		                            <div className="ui_box__inner">
		                                <h2> Basic Plan </h2>
		                                <div className="features_left">
		                                    <ul>
		                                        <li> Posting </li>
		                                        <li> Searching </li>
		                                        <li> Documentation </li>
		                                        <li className="cut"> Support </li>
		                                        <li className="cut"> Access Resume </li>
		                                        <li className="cut"> Contact Details </li>
		                                        <li className="cut"> Interviews </li>
		                                        <li className="cut"> Test Preprations </li>
		                                    </ul>
		                                </div>
		                                <div className="price-rates"> Free<small>Always</small> </div>
		                                <p>Lorem ipsum dolor sit amet. Some more super groovy information.</p>
		                            </div>
		                            <div className="drop">
		                                <a href="">
		                                    <p>Select Plan</p>
		                                </a>
		                                <div className="arrow"></div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		    <section className="call-to-action-1">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-12 col-sm-12 col-xs-12">
		                    <div className="col-md-10 col-sm-10 col-xs-12">
		                        <i className="icon-trophy"></i>
		                        <div className="heading-detail">
		                            <h3>World’s Best Job Portal Website Template</h3>
		                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
		                        </div>
		                    </div>
		                    <div className="col-md-2 col-sm-2 col-xs-12">
		                        <a href="" className="btn btn-default btn-block">Buy Now</a>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		    <section className="blog-posts-section light-grey">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-12 col-sm-12 col-xs-12 nopadding">
		                    <div className="col-md-12 col-sm-12 col-xs-12">
		                        <div className="Heading-title black">
		                            <h1>Featured Tips</h1>
		                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12">
		                        <div className="blog-post">
		                            <div className="post-img"> <a href="#"> <img src="images/blog/1.jpg" alt="" className="img-responsive" /> </a> </div>
		                            <div className="post-info"> <a href="">Aug 30, 2016</a> <a href="#">23 comments</a> </div>
		                            <h3 className="post-title"> <a href="#"> Sketch Designing Artists are beauty: A report </a> </h3>
		                            <p className="post-excerpt"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam neque tempora odit 
		                                atque repellat est molestiae perferendis. </p>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12">
		                        <div className="blog-post">
		                            <div className="post-img"> <a href="#"> <img src="images/blog/2.jpg" alt="" className="img-responsive" /> </a> </div>
		                            <div className="post-info"> <a href="#">august 30, 2016</a> <a href="#">90 comments</a> </div>
		                            <h3 className="post-title"> <a href="#"> A suitable timings for a graphic designers </a> </h3>
		                            <p className="post-excerpt"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam neque tempora odit 
		                                atque repellat est molestiae perferendis. </p>
		                        </div>
		                    </div>
		                    <div className="col-md-4 col-sm-6 col-xs-12">
		                        <div className="blog-post">
		                            <div className="post-img"> <a href="#"> <img src="images/blog/3.jpg" alt="" className="img-responsive" /> </a> </div>
		                            <div className="post-info"> <a href="#">august 02, 2016</a> <a href="#">10 comments</a> </div>
		                            <h3 className="post-title"> <a href="#"> How to get a job on same time same place </a> </h3>
		                            <p className="post-excerpt"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam neque tempora odit 
		                                atque repellat est molestiae perferendis. </p>
		                        </div>
		                    </div>
		                    <div className="col-md-12 col-sm-12 col-xs-12">
		                    	<div className="load-more-btn">
		                        	<button className="btn-default"> View All <i className="fa fa-angle-right"></i> </button>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		    <div className="brand-logo-area clients-bg">
		        <div className="clients-list">
		            <div className="client-logo"> <a href="#"><img src="images/clients/client_1.png" className="img-responsive" alt="Brand " /></a> </div>
		            <div className="client-logo"> <a href="#"><img src="images/clients/client_2.png" className="img-responsive"  alt="Brand " /></a> </div>
		            <div className="client-logo"> <a href="#"><img src="images/clients/client_3.png" className="img-responsive"  alt="Brand " /></a> </div>
		            <div className="client-logo"> <a href="#"><img src="images/clients/client_4.png" className="img-responsive"  alt="Brand" /></a> </div>
		            <div className="client-logo"> <a href="#"><img src="images/clients/client_1.png" className="img-responsive"  alt="Brand " /></a> </div>
		            <div className="client-logo"> <a href="#"><img src="images/clients/client_2.png" className="img-responsive"  alt="Brand " /></a> </div>
		            <div className="client-logo"> <a href="#"><img src="images/clients/client_3.png" className="img-responsive"  alt="Brand " /></a> </div>
		            <div className="client-logo"> <a href="#"><img src="images/clients/client_4.png" className="img-responsive"  alt="Brand " /></a> </div>
		        </div>
		    </div>
        </Layout>
    );
  }
}

export default Home;