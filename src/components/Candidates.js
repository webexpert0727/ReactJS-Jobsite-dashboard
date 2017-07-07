import React, { Component } from 'react';
import Layout from './Layout/Layout';
import CandidatesBottom from './Layout/CandidatesBottom';
import { getApiCandidatesUUID } from '../api/requests/'

class Candidates extends Component {
		constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

getCandidates() {
		getApiCandidatesUUID(1)
     .then(response => {
		   this.setState({data: response.data})
 });

}
  componentDidMount() { 
		this.getCandidates();

}
	  render() {
    return (
        <Layout>
		<section className="dashboard parallex">
		  	<div className="container-fluid">
			<div className="row">
			<div className="col-md-12 col-sm-12 col-xs-12 nopadding">
			<div className="dashboard-header">
			<div className="col-md-5 col-sm-5 col-xs-12">
			<div className="user-avatar ">
			<a href="#"><img src="images/users/12.jpg" alt="" className="img-responsive center-block " /></a>
			<h3>{this.state.data.fullName}</h3>
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
			
			  <div className="col-md-8 col-sm-8 col-xs-12">
				  <div className="job-short-detail">
				  <div className="heading-inner">
				  <p className="title">Profile detail</p>
			  </div>
			  <dl>
			  <dt>First Name:</dt>
			  <dd>{this.state.data.fullName}</dd>

			  <dt>Father Name:</dt>
			  <dd>{this.state.data.fullName}</dd>

			  <dt>Date Of Birth:</dt>
			  <dd> 15 Feb,2015 </dd>

			  <dt>Phone:</dt>
			  <dd>{this.state.data.phone}</dd>

			  <dt>Email:</dt>
			  <dd>{this.state.data.email}</dd>

			  <dt>Last Education:</dt>
			  <dd>{this.state.data.education}</dd>

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
			  <p>{this.state.data.summary}</p>

			  </div>
			  </div>
			  </div>
			  </div>
	  </section>
	  <CandidatesBottom />
    </Layout>
    );
  }

}

export default Candidates;